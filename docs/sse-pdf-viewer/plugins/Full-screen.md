---
sidebar_position: 5
title: Full Screen
---

# Full Screen plugin

The `full-screen` plugin provides a button that can be used to view the PDF document in the full screen mde. It is possible to customize the button as well.

## Install

```
> npm install @sse-ui/pdf-full-screen
```

OR

```
> yarn add @sse-ui/pdf-full-screen
```

> The `full-screen` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin and styles

```javascript
import { fullScreenPlugin } from "@sse-ui/pdf-full-screen";

// Import styles
import "@sse-ui/pdf-full-screen/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const fullScreenPluginInstance = fullScreenPlugin(props?: FullScreenPluginProps);
```

The `fullScreenPlugin()` function takes a `FullScreenPluginProps` parameter that consists of the following propeties:
_(? denotes an optional property)_

| PROPERTY                      | TYPE           | DESCRIPTION                                          | FROM  |
| ----------------------------- | -------------- | ---------------------------------------------------- | ----- |
| `enableShortcuts?`            | `boolean`      | Enable shortcuts                                     | 1.0.0 |
| `getFullScreenTarget?`        | `Function`     | Indicate the custom full screen element.             | 1.0.0 |
| `onEnterFullScreen?`          | `Zoom => void` | Triggered after entering the full screen mode.       | 1.0.0 |
| `onExitFullScreen?`           | `Zoom => void` | Triggered after exiting the full screen mode.        | 1.0.0 |
| `renderExitFullScreenButton?` | `Function`     | Render a custom button to exit the full screen mode. | 1.0.0 |

By default, the shortcuts are enabled. Users can press `ctrl` + `cmd` + `F` (on macOS) or `F11` (on other operating systems) to enter the full screen mode.
`Zoom` is the type defined as

```javascript
import { SpecialZoomLevel } from "@sse-ui/pdf-full-screen";

type Zoom = (scale: number | SpecialZoomLevel) => void;
```

The plugin instance `fullScreenPluginInstance` provides the following properties:

| PROPERTY                  | TYPE           | DESCRIPTION                       | FROM  |
| ------------------------- | -------------- | --------------------------------- | ----- |
| `EnterFullScreen`         | `ReactElement` | Customizable full screen button   | 1.0.0 |
| `EnterFullScreenButton`   | `ReactElement` | The default full screen button    | 1.0.0 |
| `EnterFullScreenMenuItem` | `ReactElement` | The default full screen menu item | 1.0.0 |

### 3. Register the plugin

Finally, register the `full-screen` plugin instance:

```javascript
<Viewer plugins={[fullScreenPluginInstance]} />
```

## Properties

The `full-screen` plugin provides other useful properties as following:

```javascript
import { ExitFullScreenIcon, FullScreenIcon } from "@sse-ui/pdf-full-screen";
```

| PROPERTY             | TYPE           | DESCRIPTION               | FROM  |
| -------------------- | -------------- | ------------------------- | ----- |
| `ExitFullScreenIcon` | `ReactElement` | The exit full screen icon | 1.0.0 |
| `FullScreenIcon`     | `ReactElement` | The full screen icon      | 1.0.0 |
