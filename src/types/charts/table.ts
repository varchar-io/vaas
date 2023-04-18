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

// define interface for users to customize datatable
// through columns.styleTable()
export type ColumnProps = {
  // column name
  column: string;
  // header name - default to column name
  header?: string;
  // text align
  align?: string;
  // formatter
  formatter?: (value: string) => string;
  // generate hyper link - displayed as blank url icon
  link?: (value: string) => string;
  // font color
  color?: (value: string) => string;
  // background color
  background?: (value: string) => string;
  // color and background for settings
  s_color?: string;
  s_bg_p?: string[];
};

// ways to customize table cells
export type TableProps = {
  columns: ColumnProps[];
  showRowId: boolean;
};