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

import { AnchorType } from "../common";
import { FontProps, defaultFont } from "../font";

// tick props - partially could be set by users
export type TickProps = {
  // color
  fill: string;
  // font size
  font: FontProps;
  // text anchor
  textAnchor: AnchorType;
  // scale to fit
  scaleToFit: boolean;
};

// axis props
export type AxisProps = {
  // number of ticks to display
  numTicks: number;
  // tick props
  tickProps: TickProps;
  // hide ticks
  tickHidden: boolean;
  // flag to indicate if the settings is modified by user
  modByUser: boolean;
  // user range overwrite
  range: Range;
};

export type AxesProps = {
  left: AxisProps;
  right: AxisProps;
  bottom: AxisProps;

  // key placed on the left
  keyLeft: boolean;
};

export const DEFAULT_KEY_TICKS = 12;
export const DEFAULT_VALUE_TICKS = 8;

// create a default axis setting
export const axis = (numTicks: number, color: string): AxisProps => ({
  numTicks,
  tickHidden: false,
  tickProps: {
    fill: color,
    font: defaultFont(color),
    textAnchor: null,
    scaleToFit: true,
  },
  modByUser: false,
  range: null,
});
