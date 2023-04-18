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

export const DEFAULT_FONT_SIZE = 14;

// font props applied to everywhere
export type FontProps = {
  // font family
  name: string;
  // font size
  size: number;
  // font color
  color: string;
  // font weight
  weight: number;
  // font angle to transform
  angle: number;
  // support scale of the font
  scale: boolean;
};

export const defaultFont = (color: string = null, size = DEFAULT_FONT_SIZE): FontProps => ({
  name: undefined,
  size,
  weight: 400,
  color,
  angle: 0,
  scale: true,
});
