---
title: Rotate
sidebar_position: 13
---

# Rotate plugin

The `rotate` plugin provide buttons to rotate the document clockwise or counterclockwise. They come with the default styles and provide the ability of customization.

## Install

```
> npm install @sse-ui/pdf-rotate;
```

OR

```
> yarn add @sse-ui/pdf-rotate;
```

> The `rotate` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { rotatePlugin } from "@sse-ui/pdf-rotate";
```

### 2. Create the plugin

```javascript
const rotatePluginInstance = rotatePlugin();
```

The plugin instance `rotatePluginInstance` provides the following properties:

| PROPERTY                 | TYPE           | DESCRIPTION                                       | FROM  |
| ------------------------ | -------------- | ------------------------------------------------- | ----- |
| `Rotate`                 | `ReactElement` | Customizable rotate button                        | 1.0.0 |
| `RotatePage`             | `ReactElement` | Rotate a single page                              | 1.0.0 |
| `RotateBackwardButton`   | `ReactElement` | The default button to rotate counterclockwise     | 1.0.0 |
| `RotateBackwardMenuItem` | `ReactElement` | Customizable menu item to rotate counterclockwise | 1.0.0 |
| `RotateForwardButton`    | `ReactElement` | The default button to rotate clockwise            | 1.0.0 |
| `RotateForwardMenuItem`  | `ReactElement` | Customizable menu item to rotate clockwise        | 1.0.0 |

### 3. Register the plugin

Register the `rotate` plugin instance:

```javascript
<Viewer plugins={[rotatePluginInstance]} />
```

## Properties

The `rotate` plugin provides other useful properties as following:

```javascript
import {
  RotateBackwardIcon,
  RotateForwardIcon,
} from "@sse-ui/pdf-rotate";
```

| PROPERTY             | TYPE           | DESCRIPTION                      | FROM  |
| -------------------- | -------------- | -------------------------------- | ----- |
| `RotateBackwardIcon` | `ReactElement` | The rotate counterclockwise icon | 1.0.0 |
| `RotateForwardIcon`  | `ReactElement` | The rotate clockwise icon        | 1.0.0 |
