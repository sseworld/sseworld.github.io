---
sidebar_position: 9
title: Open
---

# Open plugin

The `open` plugin provides a button that can be used to open a PDF document in your computer. It is possible to customize the button as well.

## Install

```
> npm install '@sse-ui/pdf-open';
```

OR

```
> yarn add '@sse-ui/pdf-open';
```

> The `open` plugin is included in the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { openPlugin } from "@sse-ui/pdf-open";

// Import styles
import "@sse-ui/pdf-open/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const openPluginInstance = openPlugin(props?: OpenPluginProps);
```

The `openPlugin()` function takes an optional `OpenPluginProps` parameter that consists of the following property:
_(? denotes an optional property)_

| PROPERTY           | TYPE      | DESCRIPTION      | FROM  |
| ------------------ | --------- | ---------------- | ----- |
| `enableShortcuts?` | `boolean` | Enable shortcuts | 1.0.0 |

By default, the shortcuts are enabled. Users can press `ctrl` + `O` to open a document.
The plugin instance `openPluginInstance` provides the following properties:

| PROPERTY       | TYPE           | DESCRIPTION                | FROM  |
| -------------- | -------------- | -------------------------- | ----- |
| `Open`         | `ReactElement` | Customizable open button   | 1.0.0 |
| `OpenButton`   | `ReactElement` | The default open button    | 1.0.0 |
| `OpenMenuItem` | `ReactElement` | The default open menu item | 1.0.0 |

### 3. Register the plugin

Register the `open` plugin instance:

```javascript
<Viewer plugins={[openPluginInstance]} />
```

## Properties

The `open` plugin provides other useful property as following:

```javascript
import { OpenFileIcon } from "@sse-ui/pdf-open";
```

| PROPERTY       | TYPE           | DESCRIPTION        | FROM  |
| -------------- | -------------- | ------------------ | ----- |
| `OpenFileIcon` | `ReactElement` | The open file icon | 1.0.0 |
