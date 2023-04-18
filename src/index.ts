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

import axios, { AxiosInstance } from "axios";
import { Annotation } from "./types/annotation";
import { axis } from "./types/charts";
import { ChartType, ColumnsVersion, Margin, SimpleData, Size, TITLE_ANNOTATION_ID, shortId } from "./types/common";
import { defaultFont } from "./types/font";
import { GraphData } from "./types/graph";

// provide a basic graph data object to start with
const baseGraph = (
  data: SimpleData,
  fontColor: string,
  tooltipColor: string,
  title: string = null,
  margin: Margin = null,
): GraphData => {
  const left = axis(5, fontColor);
  left.tickProps.textAnchor = 'end';
  left.modByUser = true;
  const bottom = axis(4, fontColor);
  bottom.tickProps.font.angle = -30;
  bottom.tickProps.textAnchor = 'end';
  bottom.modByUser = true;

  if (!margin) {
    margin = { left: 100, right: 20, top: 100, bottom: 100 }
  }

  const annotations: Annotation[] = [];
  if (title) {
    annotations.push({
      id: TITLE_ANNOTATION_ID,
      text: title,
      image: null,
      font: defaultFont(fontColor, 24),
      imageSize: null,
      anchor: 'middle',
    });
  }

  return {
    id: shortId(),
    meta: 'columns graph',
    data,
    forecasts: {},
    type: ChartType.COLUMN,
    top: 0,
    sort: [],
    options: {},
    annotations,
    arrows: [],
    chats: [],
    widgets: [],
    shapes: {},
    settings: {
      general: {
        font: defaultFont(fontColor),
        baseline: 'Raw',
        policy: 'Fill-Zero',
        valueOption: 'full',
        precision: 0,
        playback: 0,
        looping: false,
        autotitle: true,
        tooltip: tooltipColor,
        margin,
        background: 'transparent',
        gradient: null,
        palette: null,
        hideLegend: false,
        hideTooltip: false,
      },
      metrics: null,
      axes: {
        keyLeft: true,
        left,
        bottom,
        right: null,
      },
      bar: null,
    },
    version: 0,
    dataId: null,
    viewbox: null,
    cv: ColumnsVersion,
    summary: [],
  };
};

// const baseURL = 'https://columns.ai/api';
const baseURL = 'http://localhost:8088/api';

export type VaasRequest = {
  // for tracking purpose
  id: string;
  // API key for authentication
  key: string;
  name: string;
  graph: GraphData;
};

// the entry point for the sdk
export class Columns {
  private version: string = '1.0.0';
  private client: AxiosInstance = null;
  constructor(private apiKey: string) {
    this.client = axios.create({ baseURL });
  }

  // wrap a data object
  data(keys: string[], metrics: string[], rows: any[]): SimpleData {
    // sanity check
    if (!rows || rows.length === 0) {
      throw new Error('No data to graph');
    }

    // make sure keys and metrics are in data
    const row = rows[0];
    keys.forEach((key) => { if (!(key in row)) throw new Error(`Key ${key} is not in data`); });
    metrics.forEach((metric) => { if (!(metric in row)) throw new Error(`Metric ${metric} is not in data`); });

    return { keys, metrics, data: rows };
  }

  // the entry point to generate a graph data
  graph(data: SimpleData, margin: Margin = { left: 100, right: 50, top: 50, bottom: 50 }): GraphData {
    // sanity check
    if (!data) {
      throw new Error('No data to graph');
    }

    return baseGraph(data, '#000', '#DDD', null, margin);
  }

  // publish the graph into columns service
  publish(name: string, graph: GraphData): Promise<string> {
    // for tracking purpose
    const id = shortId();
    const key = this.apiKey;
    const req: VaasRequest = { id, key, name, graph };

    // columns visual URL
    return new Promise<string>((resolve) => {
      this.client.post<string>('/sdk/graph', req, {})
        .then((res) => {
          if (res.data) {
            resolve(res.data);
          }

          resolve(baseURL);
        })
        .catch((e) => {
          console.error(e);
          resolve('Failed to publish graph');
        });
    });
  }
};
