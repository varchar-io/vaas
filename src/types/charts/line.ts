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

import { ChartType } from "../common";

export type MarkerType = 'none' | 'circle' | 'square' | 'cross' | 'dot';
export type MetricLineProps = {
  // associate with a key - usually metric name
  key: string;
  // line width
  width: number;
  marker: MarkerType;
  markerSize: number;
};

export type LineType = ChartType.LINE | ChartType.AREA | ChartType.DOT;
export type LineProps = {
  // line type
  type: LineType;

  // accent color for area
  accent: string;

  // line settings
  lines: MetricLineProps[];

  // [deprecated] use area chart
  area?: boolean;
};