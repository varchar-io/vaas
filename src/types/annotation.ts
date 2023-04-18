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

import { AnchorType, Size } from './common';
import { FontProps } from './font';

// position needs to be recalculated
// based on current canvas size vs the saved canvas size
// if having image, then it's URL can be passed to image tag directly
export type Annotation = {
  id: string;
  text: string;
  image: string;
  font: FontProps;
  imageSize: Size;
  anchor: AnchorType;
};