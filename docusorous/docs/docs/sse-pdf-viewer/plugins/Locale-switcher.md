---
title: Locale Switcher
sidebar_position: 8
---

# Locale Switcher plugin

The `locale-switcher` plugin provides a popover that allows to switch to other locale. The user interface then is updated instantly based on the selected locale.

## Install

```
> npm install '@sse-ui/pdf-locale-switcher';
```

OR

```
> yarn add '@sse-ui/pdf-locale-switcher';
```

## Usage

### 1. Import the plugin

```javascript
import { localeSwitcherPlugin } from "@sse-ui/pdf-locale-switcher";
```

### 2. Create the plugin instance

```javascript
const localeSwitcherPluginInstance = localeSwitcherPlugin();
```

The plugin instance `localeSwitcherPluginInstance` provides the following property:

| PROPERTY        | TYPE           | DESCRIPTION                                 | FROM  |
| --------------- | -------------- | ------------------------------------------- | ----- |
| `LocalePopover` | `ReactElement` | The default popover lists available locales | 1.0.0 |

### 3. Register the plugin

Register the `locale-switcher` plugin instance:

```javascript
<Viewer plugins={[localeSwitcherPluginInstance]} />
```

## Properties

The `locale-switcher` plugin provides other useful property as following:

```javascript
import { LocaleIcon } from "@sse-ui/pdf-locale-switcher";
```

| PROPERTY     | TYPE           | DESCRIPTION                                    | FROM  |
| ------------ | -------------- | ---------------------------------------------- | ----- |
| `LocaleIcon` | `ReactElement` | The icon used in the `LocalePopover` component | 1.0.0 |

## See also

- [Add the locale switcher to the toolbar](https://react-pdf-viewer.dev/examples/add-the-locale-switcher-to-the-toolbar/)
- [List of built-in locales](https://react-pdf-viewer.dev/localizations/)
- [Use a different language](https://react-pdf-viewer.dev/examples/use-a-different-language/)
- [Use a RTL language](https://react-pdf-viewer.dev/examples/use-a-rtl-language/)
