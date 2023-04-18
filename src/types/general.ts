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

import { Baseline, GradientColor, Margin, MissingPolicy, ValueOption } from "./common";
import { FontProps } from "./font";

// general props set for the whole graph
export type GeneralProps = {
  // graph global font family
  font: FontProps;

  // value baseline: v = v - {base}
  baseline: Baseline;

  // using percentage value instead
  percentage?: boolean;

  // missing value policy for pivot
  policy: MissingPolicy;

  // number 0~8 for all value precision
  precision: number;

  // value option to format values
  valueOption: ValueOption;

  // play the graph from beginning to the end
  playback: number;

  // if playback is on, do we need to loop or not
  looping: boolean;

  // indicating no auto title
  autotitle: boolean;

  // tooltip color
  tooltip: string;

  // margin of the chart
  margin: Margin;

  // background color or pattern name
  background: string;

  // use linear gradient if exists, precedent to background
  gradient: GradientColor;

  // palette used to form metrics
  palette: string[];

  // control display legend or not
  hideLegend: boolean;

  // control display of tooltip
  hideTooltip: boolean;
};
