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

import ShortUniqueId from 'short-unique-id';

export const ColumnsVersion = 1;
export const TITLE_ANNOTATION_ID = 'g_auto_title';

export type Currency = {
  currency: string;
  code: string;
  symbol: string;
};

// a simple position with x and y
export interface Position {
  x: number;
  y: number;
  // indicating if the position value is set by human
  f?: boolean;
}

// a simple size with width and height
export interface Size {
  w: number;
  h: number;
}

// A simple data interface: data rows, keys, and metrics
export interface SimpleData {
  data: any[];
  keys: string[];
  metrics: string[];
}

// all supported chart types
export enum ChartType {
  BAR = 0,
  COLUMN = 1,
  LINE = 2,
  PIE = 3,
  DOUGHNUT = 4,
  TIMELINE = 5,
  TIMELINE_AREA = 6,
  TIMELINE_BAR = 7,
  BAR_RACE = 8,
  AREA = 9,
  TABLE = 10,
  MAP = 11,
  SCATTER = 12,
  TREE = 13,
  RADAR = 14,
  DOT = 15,
  BOXPLOT = 16,
  WORDCLOUD = 17,
  SUMMARY = 18,
}

export type PaletteInput = {
  begin: string;
  end: string;
  steps: number;
};

// text anchor type
export type AnchorType = 'start' | 'middle' | 'end' | 'inherit';

// all value could be rebased
export const Baselines = ['Raw', 'Mean', 'First', 'Last', 'Prev'] as const;
export type Baseline = typeof Baselines[number];

// policy to handle missing value when pivoting
export type MissingPolicy = 'Fill-Zero' | 'Remove-Row';

// options to format value for display
export type ValueOption = 'auto' | 'full' | 'sk' | 'sm' | 'sb' | 'percent';

// define graph margin property
export interface Margin {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

// a simplified linear gradient color
export type GradientColor = {
  degree: number;
  colors: string[];
};

const SUID_14 = new ShortUniqueId({ length: 14 });
export const shortId = (): string => SUID_14();
