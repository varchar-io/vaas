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

import { ChartType, Currency, Position, SimpleData, Size } from './common';
import { Annotation } from './annotation';
import { ArrowData } from './arrow';
import { WidgetData } from './widget';
import {
  AxesProps,
  BarProps,
  BarRaceProps,
  BigTextProps,
  BoxplotProps,
  LineProps,
  MapProps,
  PieProps,
  RadarProps,
  ScatterProps,
  TableProps,
  TimelineProps,
  TreeProps,
  WordcloudProps,
} from './charts';
import { GeneralProps } from './general';
import { ForecastRow } from './forecast';

// sort properties should be part of query rather than graph
export type SortColumn = {
  col: string;
  display?: string;
  isn?: boolean;
  desc?: boolean;
};

// a super set of column props
// reference d3 date time format spec for values
// eg. '%Y-%m-%d', '%b %d'
export interface ColumnOptions {
  isDate?: boolean;
  isPct?: boolean;
}

// ideally this could be generated from query.
export type MetricsProps = {
  // metric alias: value.Max -> "Max GDP"
  aliases: Record<string, string>;
  // metric color: value.Max -> "#639"
  colors: Record<string, string>;
  // prefix for the metric
  currencies: Record<string, Currency>;
};

export type ChatProps = {
  hide: boolean;
};

// a collection for settings editing
export type GraphSettings = {
  bar?: BarProps;
  map?: MapProps;
  table?: TableProps;
  pie?: PieProps;
  line?: LineProps;
  scatter?: ScatterProps;
  brace?: BarRaceProps;
  timeline?: TimelineProps;
  metrics?: MetricsProps;
  general?: GeneralProps;
  axes?: AxesProps;
  tree?: TreeProps;
  chat?: ChatProps;
  bigtext?: BigTextProps;
  radar?: RadarProps;
  box?: BoxplotProps;
  wordcloud?: WordcloudProps;
};

// define graph data interface
export interface GraphData {
  // HTML node id - used to locate graph node
  id: string;
  // optional meta info
  meta: string;
  // rows of data
  data: SimpleData;
  // forecasts for current data by metric
  forecasts: Record<string, ForecastRow[]>;
  // graph type to display given data
  type: ChartType;
  // top N limit for display - default 0 no limit
  top: number;
  // sorting schema
  sort: SortColumn[];
  // column options
  options: Record<string, ColumnOptions>;
  // editable annotations
  annotations: Annotation[];
  // widgets
  widgets: WidgetData[];
  // editable arrows
  arrows: ArrowData[];
  // editable chat id
  chats: string[];
  // graph settings to customize graph
  settings: GraphSettings;
  // version number indicating to refresh
  version: number;
  // shapes records position information of each element in the graph
  shapes: Record<string, Position>;
  // view box is the whole graph to locate each item [0, 0, x, y]
  viewbox: Size;
  // data source id that graph built from
  dataId: string;
  // columns version for tracking software upgrade
  cv: number;
  // summary of the data
  summary: string[];
}