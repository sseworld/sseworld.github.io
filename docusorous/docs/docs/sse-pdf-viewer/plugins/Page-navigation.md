---
title: Page Navigation
sidebar_position: 10
---

# Page Navigation plugin

The `page-navigation` plugin provides a few components to navigate between pages.

## Install

```
> npm install '@sse-ui/pdf-page-navigation';
```

OR

```
> yarn add '@sse-ui/pdf-page-navigation';
```

> The `page-navigation` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { pageNavigationPlugin } from "@sse-ui/pdf-page-navigation";

// Import styles
import "@sse-ui/pdf-page-navigation/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const pageNavigationPluginInstance = pageNavigationPlugin();
```

The `pageNavigationPlugin()` function takes an optional `PageNavigationPluginProps` parameter that consists of the following property:
_(? denotes an optional property)_

| PROPERTY           | TYPE      | DESCRIPTION      | FROM  |
| ------------------ | --------- | ---------------- | ----- |
| `enableShortcuts?` | `boolean` | Enable shortcuts | 1.0.0 |

The shortcuts are enabled by default. Users can use particular shortcuts to jump to the previous or next page:

| SHORTCUT                           | ACTION                                     |
| ---------------------------------- | ------------------------------------------ |
| `Command` + `ArrowLeft` (on macOS) | Go to the previous clicked link annotation |
| `Alt` + `ArrowLeft` (on Windows)   | Go to the previous clicked link annotation |
| `PageUp` or `Alt` + `ArrowUp`      | Go to the previous page                    |
| `PageDown` or `Alt` + `ArrowDown`  | Go to the next page                        |

The plugin instance `pageNavigationPluginInstance` provides the following properties:

| PROPERTY                   | TYPE           | DESCRIPTION                                      | FROM  |
| -------------------------- | -------------- | ------------------------------------------------ | ----- |
| `CurrentPageInput`         | `ReactElement` | Allow to jump to any page                        | 1.0.0 |
| `CurrentPageLabel`         | `ReactElement` | Display the current page number                  | 1.0.0 |
| `GoToFirstPage`            | `ReactElement` | Customizable button to jump to the first page    | 1.0.0 |
| `GoToFirstPageButton`      | `ReactElement` | The button to jump to the first page             | 1.0.0 |
| `GoToFirstPageMenuItem`    | `ReactElement` | The menu item to jump to the first page          | 1.0.0 |
| `GoToLastPage`             | `ReactElement` | Customizable button to jump to the last page     | 1.0.0 |
| `GoToLastPageButton`       | `ReactElement` | The button to jump to the last page              | 1.0.0 |
| `GoToLastPageMenuItem`     | `ReactElement` | The menu item to jump to the last page           | 1.0.0 |
| `GoToNextPage`             | `ReactElement` | Customizable button to jump to the next page     | 1.0.0 |
| `GoToNextPageButton`       | `ReactElement` | The button to jump to the next page              | 1.0.0 |
| `GoToNextPageMenuItem`     | `ReactElement` | The menu item to jump to the next page           | 1.0.0 |
| `GoToPreviousPage`         | `ReactElement` | Customizable button to jump to the previous page | 1.0.0 |
| `GoToPreviousPageButton`   | `ReactElement` | The button to jump to the previous page          | 1.0.0 |
| `GoToPreviousPageMenuItem` | `ReactElement` | The menu item to jump to the previous page       | 1.0.0 |
| `NumberOfPages`            | `ReactElement` | Display the total number of pages                | 1.0.0 |
| `jumpToNextPage`           | `Function`     | Jump to the next page                            | 1.0.0 |
| `jumpToPage`               | `Function`     | Jump to given page                               | 1.0.0 |
| `jumpToPreviousPage`       | `Function`     | Jump to the previous page                        | 1.0.0 |

See their usages in the examples below.

### 3. Register the plugin

Register the `page-navigation` plugin instance:

```javascript
<Viewer plugins={[pageNavigationPluginInstance]} />
```

## Properties

The `page-navigation` plugin provides other useful properties as following:

```javascript
import {
  DownArrowIcon,
  NextIcon,
  PreviousIcon,
  UpArrowIcon,
} from "@sse-ui/pdf-page-navigation";
```

| PROPERTY        | TYPE           | DESCRIPTION                                           | FROM  |
| --------------- | -------------- | ----------------------------------------------------- | ----- |
| `DownArrowIcon` | `ReactElement` | Can be used with going to the first page component    | 2.0.0 |
| `NextIcon`      | `ReactElement` | Can be used with going to the next page component     | 2.0.0 |
| `PreviousIcon`  | `ReactElement` | Can be used with going to the previous page component | 2.0.0 |
| `UpArrowIcon`   | `ReactElement` | Can be used with going to the last page component     | 2.0.0 |
