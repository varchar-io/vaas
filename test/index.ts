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
import { ChartType } from 'columns-graph-model';
import { Columns } from 'columns-sdk';
import rows from './data.json';

// initialize the SDK and start building a graph
// How to get your API key: sign in your Columns account, and go to your settings page.
// there is a section listing your API key and button to copy it to your clipboard.
const columns = new Columns('fDbHWom8eN6yo3');

// rows is an example data set where you should organize your data in a similar way.
const data = columns.data(['state'], ['value'], rows);
const graph = columns.graph(data);

// switch to different chart types: BAR, PIE, DOUGHGUT, LINE, AREA, SCATTER, etc.
graph.type = ChartType.COLUMN;

// customise the graph (lots of options in its data model)
graph.settings.general.palette = ['#ff0000', '#00ff00', '#0000ff'];
graph.settings.general.background = '#00000002';

// Call the API to generate the graph and publish it
// you can append "headless" to the returned URL for an embeddable link.
(async () => {
  const url = await columns.publish('test-api', graph);
  console.log(`Columns graph: ${url}`);
})();
