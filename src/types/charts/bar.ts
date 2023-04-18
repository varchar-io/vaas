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

import { FontProps } from "../font";
export type HighlightOption = {
  // if no key - no highlight
  keys: string[];
  // foreground color for highlighted bar
  foreground: string;
  // background color for non-highlighted bar
  background: string;
  // overwride show value or not for selected bar
  showValue: boolean;
  // 0~1: used for opacity for forehead and background
  foreopacity: number;
  backopacity: number;
};

export type GroupType = 'stack' | 'side';
export type BarProps = {
  group: GroupType;
  // vertical->column, otherwise bar
  vertical: boolean;

  // show value label
  showValue?: boolean;
  valueFont?: FontProps;
  highlight?: HighlightOption;
};