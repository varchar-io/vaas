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
import { ChartType } from '../src/types/common';
import { Columns } from '../src/index';
import rows from './data.json';

// initialize the SDK and start building a graph
const columns = new Columns('{YOUR_API_KEY}');
const data = columns.data(['state'], ['value'], rows);
const graph = columns.graph(data);

// customise the graph (lots of options in its data model) 
// and publish it to Columns to exchange for an embeddable link.
graph.type = ChartType.MAP;
(async () => {
  const url = await columns.publish('test-api', graph);
  console.log(`Columns graph: ${url}`);
})();
