---
sidebar_position: 18
title: Toolbar
---

# Toolbar plugin

The `toolbar` plugin combines different parts provided by other plugins such as

- [Full Screen](/docs/ui/sse-pdf-viewer/plugin/full-screen.md) button
- [Get File](/docs/ui/sse-pdf-viewer/plugin/get-file.md) button
- [Open](/docs/ui/sse-pdf-viewer/plugin/open.md) button
- [Page Navigation](/docs/ui/sse-pdf-viewer/plugin/page-navigation.md) buttons
- [Print](/docs/ui/sse-pdf-viewer/plugin/print.md) button
- [Rotate](/docs/ui/sse-pdf-viewer/plugin/rotate.md) buttons
- [Search](/docs/ui/sse-pdf-viewer/plugin/search.md) button
- [Theme](/docs/ui/sse-pdf-viewer/plugin/theme.md) button
- [Zoom](/docs/ui/sse-pdf-viewer/plugin/zoom.md) buttons

## Install

```
> npm install @sse-ui/pdf-toolbar;
```

OR

```
> yarn add @sse-ui/pdf-toolbar;
```

> The `toolbar` plugin is included in the [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { toolbarPlugin } from "@sse-ui/pdf-toolbar";

// Import styles
import "@sse-ui/pdf-toolbar/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const toolbarPluginInstance = toolbarPlugin(props?: ToolbarPluginProps);
```

See the [Create a toolbar with more options](https://react-pdf-viewer.dev/examples/create-a-toolbar-with-more-options/) example for more details about `ToolbarPluginProps`.
The plugin instance `toolbarPluginInstance` provides the following property:

| PROPERTY                       | TYPE                   | DESCRIPTION                                                            | FROM  |
| ------------------------------ | ---------------------- | ---------------------------------------------------------------------- | ----- |
| `Toolbar`                      | `ReactElement`         | The default toolbar                                                    | 1.0.0 |
| `fullScreenPluginInstance`     | `FullScreenPlugin`     | The instance of the Full Screen plugin                                 | 1.0.0 |
| `getFilePluginInstance`        | `GetFilePlugin`        | The instance of the Get File plugin                                    | 1.0.0 |
| `openPluginInstance`           | `OpenPlugin`           | The instance of the Open plugin                                        | 1.0.0 |
| `pageNavigationPluginInstance` | `PageNavigationPlugin` | The instance of the Page Navigation plugin                             | 1.0.0 |
| `printPluginInstance`          | `PrintPlugin`          | The instance of the Print plugin                                       | 1.0.0 |
| `propertiesPluginInstance`     | `PropertiesPlugin`     | The instance of the Properties plugin                                  | 1.0.0 |
| `renderDefaultToolbar`         | `Function`             | Render a custom toolbar based on the default toolbar. See this example | 1.0.0 |
| `rotatePluginInstance`         | `RotatePlugin`         | The instance of the Rotate plugin                                      | 1.0.0 |
| `scrollModePluginInstance`     | `ScrollModePlugin`     | The instance of the Scroll Mode plugin                                 | 1.0.0 |
| `searchPluginInstance`         | `SearchPlugin`         | The instance of the Search plugin                                      | 1.0.0 |
| `selectionModePluginInstance`  | `SelectionModePlugin`  | The instance of the Selection Mode plugin                              | 1.0.0 |
| `themePluginInstance`          | `ThemePlugin`          | The instance of the Theme plugin                                       | 1.0.0 |
| `zoomPluginInstance`           | `ZoomPlugin`           | The instance of the Zoom plugin                                        | 1.0.0 |

### 3. Register the plugin

Register the `toolbar` plugin instance:

```javascript
<Viewer plugins={[toolbarPluginInstance]} />
```

## Properties

The `toolbar` plugin provides other useful property as following:

```javascript
import { MoreIcon } from "@sse-ui/pdf-toolbar";
```

| PROPERTY   | TYPE           | DESCRIPTION                  | FROM  |
| ---------- | -------------- | ---------------------------- | ----- |
| `MoreIcon` | `ReactElement` | The three vertical dots icon | 1.0.0 |
