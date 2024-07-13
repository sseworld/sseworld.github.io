---
title: Properties
---

# Properties plugin

The `properties` plugin provides a button to list the properties of the PDF document.

## Install

```
> npm install '@sse-ui/pdf-properties';
```

OR

```
> yarn add '@sse-ui/pdf-properties';
```

> The `properties` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { propertiesPlugin } from "@sse-ui/pdf-properties";

// Import styles
import "@sse-ui/pdf-properties/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const propertiesPluginInstance = propertiesPlugin();
```

The plugin instance `propertiesPluginInstance` provides the following properties:

| PROPERTY                 | TYPE           | DESCRIPTION                                  | FROM  |
| ------------------------ | -------------- | -------------------------------------------- | ----- |
| `ShowProperties`         | `ReactElement` | Customizable button to list the properties   | 1.0.0 |
| `ShowPropertiesButton`   | `ReactElement` | The default button to list the properties    | 1.0.0 |
| `ShowPropertiesMenuItem` | `ReactElement` | The default menu item to list the properties | 1.0.0 |

### 3. Register the plugin

Register the `properties` plugin instance:

```javascript
<Viewer plugins={[propertiesPluginInstance]} />
```

