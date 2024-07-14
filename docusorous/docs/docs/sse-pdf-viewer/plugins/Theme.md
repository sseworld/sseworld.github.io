---
title: Theme
sidebar_position: 17
---

# Theme plugin

The `theme` plugin provides components that can be used to switch between the light and dark themes.

## Install

```
> npm install @sse-ui/pdf-theme;
```

OR

```
> yarn add @sse-ui/pdf-theme;
```

> The `theme` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { themePlugin } from "@sse-ui/pdf-theme";
```

### 2. Create the plugin instance

```javascript
const themePluginInstance = themePlugin();
```

The plugin instance `themePluginInstance` provides the following properties:

| PROPERTY              | TYPE           | DESCRIPTION                             | FROM  |
| --------------------- | -------------- | --------------------------------------- | ----- |
| `SwitchTheme`         | `ReactElement` | Customizable component to switch themes | 1.0.0 |
| `SwitchThemeButton`   | `ReactElement` | The default button to switch themes     | 1.0.0 |
| `SwitchThemeMenuItem` | `ReactElement` | The default menu item to switch themes  | 1.0.0 |

### 3. Register the plugin

Register the `theme` plugin instance:

```javascript
<Viewer plugins={[themePluginInstance]} />
```

## Properties

The `theme` plugin provides other properties as following:

```javascript
import { DarkIcon, LightIcon } from "@sse-ui/pdf-theme";
```

| PROPERTY    | TYPE           | DESCRIPTION          | FROM  |
| ----------- | -------------- | -------------------- | ----- |
| `DarkIcon`  | `ReactElement` | The dark theme icon  | 1.0.0 |
| `LightIcon` | `ReactElement` | The light theme icon | 1.0.0 |
