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

import { PaletteInput, Position, Size } from "../common";
import { FontProps } from "../font";

// state: state name, full name or 2-letter short name
// state_code: 2-letter code (01, 02, ...)
// county: county name
// county_code5: full county code with 5 numbers
// county_code3: county code with 3 numbers without first 2 numbers for state
// city: city name
// zip: zip code - 5 letters
export type GeoColumnType =
  | 'state'
  | 'state_code'
  | 'county'
  | 'county_code5'
  | 'county_code3'
  | 'city'
  | 'zip';

export type ValueDisplayProps = {
  show: boolean;
  font: FontProps;
};

// ways to customize map
export type LegendProps = {
  position: Position;
  size: Size;
  font: FontProps;
};

// border line properties
export type MapBorderProps = {
  color: string;
  thickness: number;
};

// per capita support type: every million or every thousand people
export const PerCapitaTypes = ['None', '1M', '100K', '1K'];
export type PerCapitaType = typeof PerCapitaTypes[number];
export const MapTypes = ['spike', 'bubble', 'choropleth'];
export type MapType = typeof MapTypes[number];
export type MapProps = {
  // map indicator type
  indicator: MapType;

  // color hex value
  color: string;

  // [deprecated] palette for the map
  palette?: PaletteInput;

  // state column
  geocolumns?: Partial<Record<GeoColumnType, string>>;

  // show value in map
  valueDisplay: ValueDisplayProps;

  // control legend display
  legend: LegendProps;

  // map border props
  border: MapBorderProps;
  // if map supports per capita
  perCapita: PerCapitaType;
  // enable per capita options
  enablePerCapita: boolean;
  // side list cover
  sideItemFull: boolean;
  // color by list of values
  colorKey: string;
};
