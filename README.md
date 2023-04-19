# VAAS (visualization as a service)
The javascript SDK to create, publish and share flexible data visualization.
You can use it in your `browser` or in `node.js`.

## Landing page
Visit vaas [landing page](https://columns.ai/dev) to get an overview of it.

## Installation
```bash
npm install vaas
```

## Usage
### prequisites
- [ ] create a Columns account at [columns.ai](https://columns.ai)
- [ ] grab your API key from your [profile](https://columns.ai/profile) page.

### basic usage
```javascript
import { Columns } from 'vaas';
import { ChartType } from 'vaas/types/common';
import { API_KEY } from './config';

// create a new client
const columns = new Columns(API_KEY);

// fill in your data, in below example, we will a sample data (~/test/data.json)
// build a basic graph object from the data
const data = columns.data(['state'], ['value'], rows);
const graph = columns.graph(data);

// now we can customize this graph object: layout, theme, settings, chart type, etc.
// as basic exmaple: simply display it as a map
graph.type = ChartType.MAP;

// publish the graph to Columns to get a live link
// the url can be headless by simply appending `?headless` to the url
columns.publish('test-api', graph)
.then((url) =>{
  console.log(url);
});
```

After executing a few lines of code as shown above, you will get a new link in the console, similar like 
```shell
https://columns.ai/visual/view/g-v0dK1sZUMlMeG4
```
Use `headless` parameter to make it embeddable in your app.

## API
`vaas` is the code name for Columns SDK. It is a javascript library that allows you to create, publish and share data visualization.
The SDK includes all the core graphing object models and the API client to interact with the Columns API.
The major interfaces of the SDK are:
- `data` - the data model.
- `graph` - the graph model.
- `publish` - the API client to publish the graph to Columns.


Besides the core data and core graph, other models are also available to customize the graph:
- `theme` - the theme model that allow us to apply pre-built theme to the current graph.
- `access` - the access model that allow us to control the access to the graph: public or restricted to a list of people.
- `elements` - the elements model that allow us to control the elements of the graph: title, subtitle, annotations, arrows, widgets, etc.
- `settings` - the settings model that allow us to control the settings of the graph: layout, color, background, font, etc.


## Future work
Current version of the SDK is the `visualization` part of Columns that allows you to create, publish and share data visualization.
In the future, we will add the `analytics` part of Columns that allows you to connect any data and query to generate the "data model" on demand.
Please share your feedback and let us know what you think.

## Try now
You can try the SDK right now. If you have any questions, please create an issue or reach out using any of the [channels](https://columns.ai/contact) below.
