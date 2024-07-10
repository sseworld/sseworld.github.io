---
title: Selection Mode
---

The `selection-mode` plugin provides buttons to apply two different selection modes:

| MODE                 | TYPE            | DESCRIPTION                                                                |
| -------------------- | --------------- | -------------------------------------------------------------------------- |
| `SelectionMode.Hand` | `SelectionMode` | Use the mouse to drag the pages. Users cannot select the text of document. |
| `SelectionMode.Text` | `SelectionMode` | The normal selection mode. Users can select the text of document.          |

`SelectionMode` is an enum provided by the `selection-mode` plugin. You will know more about it in the next section.

## Install

```
> npm install @sse-ui/pdf-selection-mode;
```

OR

```
> yarn add @sse-ui/pdf-selection-mode;
```

> The `selection-mode` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { selectionModePlugin } from "@sse-ui/pdf-selection-mode";

// Import styles
import "@sse-ui/pdf-selection-mode/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const selectionModePluginInstance = selectionModePlugin(
    props?: SelectionModePluginProps
);
```

The optional parameter `SelectionModePluginProps` represents an object of the property:
_(? denotes an optional property)_

| PROPERTY         | TYPE            | DESCRIPTION                                                               | FROM  |
| ---------------- | --------------- | ------------------------------------------------------------------------- | ----- |
| `selectionMode`? | `SelectionMode` | The initial selection mode. By default, it is set to `SelectionMode.Text` | 1.0.0 |

The plugin instance `selectionModePluginInstance` provides the following properties:

| PROPERTY                      | TYPE           | DESCRIPTION                                        | FROM  |
| ----------------------------- | -------------- | -------------------------------------------------- | ----- |
| `SwitchSelectionMode`         | `ReactElement` | Customizable button to switch the selection mode   | 1.0.0 |
| `SwitchSelectionModeButton`   | `ReactElement` | The default button to switch the selection mode    | 1.0.0 |
| `SwitchSelectionModeMenuItem` | `ReactElement` | The default menu item to switch the selection mode | 1.0.0 |

### 3. Register the plugin

Register the `selection-mode` plugin instance:

```javascript
<Viewer plugins={[selectionModePluginInstance]} />
```

## Properties

The `selection-mode` plugin provides other useful properties as following:

```javascript
import {
  HandToolIcon,
  TextSelectionIcon,
} from "@sse-ui/pdf-selection-mode";
```

| PROPERTY            | TYPE           | DESCRIPTION                                      | FROM  |
| ------------------- | -------------- | ------------------------------------------------ | ----- |
| `HandToolIcon`      | `ReactElement` | The hand icon represents the hand selection mode | 1.0.0 |
| `TextSelectionIcon` | `ReactElement` | The icon represents the text selection mode      | 1.0.0 |
