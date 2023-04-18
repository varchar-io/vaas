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

import { FontProps } from './font';

// widget can be added to a graph, it auto sum/avg results.
export type TagData = {
  value: number;
  display: string;
  color: string;
  goal: number;
};
export type WidgetType = 'sum' | 'avg' | 'pct';
export type WidgetData = {
  id: string;
  type: WidgetType;
  tags: Record<string, TagData>;
  filters: string[];
  font: FontProps;
  // transpose source data during tags generation
  transpose: boolean;
  // display widget type in text
  displayType: boolean;
};