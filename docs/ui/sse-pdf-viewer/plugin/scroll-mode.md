---
sidebar_position: 13
title: Scroll Mode
---

# Scroll Mode plugin

The `scroll-mode` plugin provides buttons to adjust the scroll mode to one of four possible modes:

| MODE                    | TYPE         | DESCRIPTION                                                         |
| ----------------------- | ------------ | ------------------------------------------------------------------- |
| `ScrollMode.Vertical`   | `ScrollMode` | The default scroll mode. Scroll the pages in the vertical direction |
| `ScrollMode.Horizontal` | `ScrollMode` | Scroll the pages in the horizontal direction                        |
| `ScrollMode.Page`       | `ScrollMode` | Display a single page each time                                     |
| `ScrollMode.Wrapped`    | `ScrollMode` | Scroll the pages in both vertical and horizontal directions         |

`ScrollMode` is an enum provided by the `@sse-ui/pdf-core` package.

## Install

```
> npm install @sse-ui/pdf-scroll-mode;
```

OR

```
> yarn add @sse-ui/pdf-scroll-mode;
```

> The `scroll-mode` plugin is included in the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
const scrollModePluginInstance = scrollModePlugin();
```

The plugin instance `scrollModePluginInstance` provides the following properties:

| PROPERTY                   | TYPE           | DESCRIPTION                                     | FROM  |
| -------------------------- | -------------- | ----------------------------------------------- | ----- |
| `switchScrollMode`         | `Function`     | Switch to a given scroll mode                   | 1.0.0 |
| `SwitchScrollMode`         | `ReactElement` | Customizable button to switch the scroll mode   | 1.0.0 |
| `SwitchScrollModeButton`   | `ReactElement` | The default button to switch the scroll mode    | 1.0.0 |
| `SwitchScrollModeMenuItem` | `ReactElement` | The default menu item to switch the scroll mode | 1.0.0 |
| `switchViewMode`           | `Function`     | Switch to a given viewmode                      | 1.0.0 |
| `SwitchViewMode`           | `ReactElement` | Customizable button to switch the viewmode      | 1.0.0 |
| `SwitchViewModeButton`     | `ReactElement` | The default button to switch the viewmode       | 1.0.0 |
| `SwitchViewModeMenuItem`   | `ReactElement` | The default menu item to switch the viewmode    | 1.0.0 |

The `switchScrollMode` function can be used to [switch](https://react-pdf-viewer.dev/examples/switch-to-a-scroll-mode/) the current layout to a given mode programmatically:

```javascript
import { ScrollMode } from "@sse-ui/pdf-core";

// Switch to the wrapped mode
switchScrollMode(ScrollMode.Wrapped);
```

### 2. Register the plugin

Register the `scroll-mode` plugin instance:

```javascript
<Viewer plugins={[scrollModePluginInstance]} />
```

## Properties

The `scroll-mode` plugin provides other useful properties as following:

| PROPERTY                    | TYPE           | DESCRIPTION                                           | FROM  |
| --------------------------- | -------------- | ----------------------------------------------------- | ----- |
| `DualPageCoverViewModeIcon` | `ReactElement` | The icon represents the dual page with cover viewmode | 1.0.0 |
| `DualPageViewModeIcon`      | `ReactElement` | The icon represents the dual page viewmode            | 1.0.0 |
| `HorizontalScrollingIcon`   | `ReactElement` | The icon represents the horizontal scroll mode        | 1.0.0 |
| `PageScrollingIcon`         | `ReactElement` | The icon represents the page scroll mode              | 1.0.0 |
| `VerticalScrollingIcon`     | `ReactElement` | The icon represents the vertical scroll mode          | 1.0.0 |
| `WrappedScrollingIcon`      | `ReactElement` | The icon represents the wrapped scroll mode           | 1.0.0 |
