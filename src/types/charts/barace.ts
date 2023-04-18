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

import { PaletteInput } from "../common";
import { FontProps } from "../font";

// bar race props for each key
export type RaceKeyProps = {
  // bar color for this key
  color: string;
  // logo url for this key
  logo: string;
};
export type ValueDisplayPosition = 'in' | 'out';
export type BarRaceProps = {
  // data field name used for loop
  loopField: string;
  // data field name used for a key
  keyField: string;
  // data field name used for coloring
  colorField: string;
  // frame per second, for example 1=1s per frame, 2=0.5s per frame
  fps: number;
  // top N items to join the race
  items: number;
  // number of steps to insert in between two frames
  steps: number;
  // where to display value
  valuePos: ValueDisplayPosition;
  // font settings this bar
  font: FontProps;
  // tick font settings
  tickFont: FontProps;
  // hide key from displaying
  hideKey: boolean;
  // indicating if we want to lookup entity
  lookup: boolean;
  // bar corner radius - px
  radius: number;
  // show counter
  counter: boolean;
  // [deprecated] palette for coloring bars
  palette?: PaletteInput;
  // race key props for each key
  bars: Record<string, RaceKeyProps>;
};
