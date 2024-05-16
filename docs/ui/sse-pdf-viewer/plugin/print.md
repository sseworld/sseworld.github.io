---
sidebar_position: 10
title: Print
---

# Print plugin

The `print` plugin provides a button to print the current PDF document. It is possible to customize the button as well.

## Install

```
> npm install '@sse-ui/pdf-print';
```

OR

```
> yarn add '@sse-ui/pdf-print';
```

> The `print` plugin is included in the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { printPlugin } from "@sse-ui/pdf-print";

// Import styles
import "@sse-ui/pdf-print/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const printPluginInstance = printPlugin(props?: PrintPluginProps);
```

The `printPlugin()` function takes an optional `PrintPluginProps` parameter that consists of the following property:
_(? denotes an optional property)_

| PROPERTY            | TYPE       | DESCRIPTION                                               | FROM  |
| ------------------- | ---------- | --------------------------------------------------------- | ----- |
| `enableShortcuts`?  | `boolean`  | Enable shortcuts                                          | 1.0.0 |
| `renderProgressBar` | `Function` | Customize the progress bar when preparing pages to print. | 1.0.0 |
| `setPages`?         | `Function` | Set target pages that will be printed.                    | 1.0.0 |

By default, the shortcut is enabled. Users can press `ctrl` + `P` to print the current document.
The plugin instance `printPluginInstance` provides the following properties:

| PROPERTY        | TYPE           | DESCRIPTION                                  | FROM  |
| --------------- | -------------- | -------------------------------------------- | ----- |
| `print`         | `Function`     | Print the current document. See this example | 1.0.0 |
| `Print`         | `ReactElement` | Customizable print button                    | 1.0.0 |
| `PrintButton`   | `ReactElement` | The default print button                     | 1.0.0 |
| `PrintMenuItem` | `ReactElement` | The default print menu item                  | 1.0.0 |

### 3. Register the plugin

Register the `print` plugin instance:

```javascript
<Viewer plugins={[printPluginInstance]} />
```

## Properties

The `print` plugin provides other useful property as following:

```javascript
import { PrintIcon } from "@sse-ui/pdf-print";
```

| PROPERTY    | TYPE        | DESCRIPTION    | FROM  |
| ----------- | ----------- | -------------- | ----- |
| `PrintIcon` | `PrintIcon` | The print icon | 1.0.0 |
