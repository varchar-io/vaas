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

export type TreeLayout = 'tree' | 'cluster' | 'map';
export type TileType = 'squarify' | 'binary' | 'dice' | 'resquarify' | 'slice' | 'slicedice';

export type TreeProps = {
  // use tree or cluster layout method
  layout: TreeLayout;
  // node radius value
  radius: number;
  // node color
  color: string;
  // settings for tree structure
  // at least two fields needs to set
  fid: string;
  fparent: string;
  flabel: string;
  // label font
  label: FontProps;
  // link color
  linkColor: string;
  // map tile, ony useful for tree map
  tile: TileType;
};