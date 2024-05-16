---
sidebar_position: 19
title: Zoom
---

# Zoom plugin

The `zoom` plugin provides a few components to zoom in or zoom out a PDF document. It also allows to customize these components.

## Install

```
> npm install @sse-ui/pdf-zoom;
```

OR

```
> yarn add @sse-ui/pdf-zoom;
```

> The `zoom` plugin is included in the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { zoomPlugin } from "@sse-ui/pdf-zoom";

// Import styles
import "@sse-ui/pdf-zoom/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const zoomPluginInstance = zoomPlugin(props?: ZoomPluginProps)
```

The `zoomPlugin()` function takes an optional `ZoomPluginProps` parameter that consists of the following property:
_(? denotes an optional property)_

| PROPERTY           | TYPE      | DESCRIPTION      | FROM  |
| ------------------ | --------- | ---------------- | ----- |
| `enableShortcuts`? | `boolean` | Enable shortcuts | 1.0.0 |

By default, users can use particular shortcuts to zoom in or zoom out the current document:

| SHORTCUT     | ACTION                               |
| ------------ | ------------------------------------ |
| `ctrl` + `+` | Zoom in the document                 |
| `ctrl` + `-` | Zoom out the document                |
| `ctrl` + `0` | View the actual size of the document |

The plugin instance `zoomPluginInstance` provides the following properties:

| PROPERTY          | TYPE           | DESCRIPTION                                          | FROM  |
| ----------------- | -------------- | ---------------------------------------------------- | ----- |
| `CurrentScale`    | `ReactElement` | Show the current scale value                         | 1.0.0 |
| `Zoom`            | `ReactElement` | Customizable zoom button                             | 1.0.0 |
| `ZoomIn`          | `ReactElement` | Customizable zoom in button                          | 1.0.0 |
| `ZoomInButton`    | `ReactElement` | The default zoom in button                           | 1.0.0 |
| `ZoomInMenuItem`  | `ReactElement` | The default zoom in menu item                        | 1.0.0 |
| `ZoomOut`         | `ReactElement` | Customizable zoom out button                         | 1.0.0 |
| `ZoomOutButton`   | `ReactElement` | The default zoom out button                          | 1.0.0 |
| `ZoomOutMenuItem` | `ReactElement` | The default zoom out menu item                       | 1.0.0 |
| `ZoomPopover`     | `ReactElement` | The default popover allows to zoom to specific level | 1.0.0 |
| `zoomTo`          | `Function`     | Zoom to specific level                               | 1.0.0 |
