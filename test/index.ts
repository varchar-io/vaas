/*
 * Copyright 2023-present columns.ai
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// as a user, this is how I will use the SDK
import { ChartType, GraphData } from 'columns-graph-model';
import { Columns } from 'columns-sdk';
import rows from './data.json';

const testFromScratch = async (columns: Columns): Promise<GraphData> => {
  // rows is an example data set where you should organize your data in a similar way.
  const data = columns.data(['state'], ['value'], rows);
  const graph = columns.graph(data);

  // switch to different chart types: BAR, PIE, DOUGHGUT, LINE, AREA, SCATTER, etc.
  graph.type = ChartType.COLUMN;

  // customise the graph (lots of options in its data model)
  graph.settings.general.palette = ['#ff0000', '#00ff00', '#0000ff'];
  graph.settings.general.background = '#00000002';

  return graph;
};

// Call the API to generate the graph and publish it
// you can append "headless" to the returned URL for an embeddable link.
const testUsingTemplate = async (columns: Columns): Promise<GraphData> => {
  // load a template from a pre-designed graph from Columns, so we just need to feed the data
  // here we are using the example: https://columns.ai/visual/view/U6tALuJ3cTdPFw
  const visualId = 'U6tALuJ3cTdPFw';
  const graph = await columns.template(visualId);

  // customise the graph (lots of options in its data model)
  if (!graph) {
    console.log(`Failed to load template from Columns: ${visualId}`);
    return;
  }

  // rows is an example data set where you should organize your data in a similar way.
  const data = columns.data(['state'], ['value'], rows);
  graph.data = data;

  return graph;
};

// Call the API to generate the graph and publish it
// you can append "headless" to the returned URL for an embeddable link.
(async () => {
  // initialize the SDK and start building a graph
  // How to get your API key: sign in your Columns account, and go to your settings page.
  // there is a section listing your API key and button to copy it to your clipboard.
  const columns = new Columns('{YOUR_API_KEY}');

  // const graph = await testFromScratch(columns);
  const graph = await testUsingTemplate(columns);

  // publish the graph and get a new URL
  const url = await columns.publish('test-template-api', graph);
  console.log(`Columns graph: ${url}`);
})();
