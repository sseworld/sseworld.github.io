---
title: Search
sidebar_position: 15
---

# Search plugin

The `search` plugin provides a button or control to search for given keyword.

## Install

```
> npm install @sse-ui/pdf-search;
```

OR

```
> yarn add @sse-ui/pdf-search;
```

> The `search` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { searchPlugin } from "@sse-ui/pdf-search";

// Import styles
import "@sse-ui/pdf-search/lib/styles/index.css";
```

### 2. Create the plugin instance

```typescript
const searchPluginInstance = searchPlugin(props?: SearchPluginProps);
```

The optional parameter `SearchPluginProps` represents an object of the property:
_(? denotes an optional property)_

| PROPERTY             | TYPE                                | DESCRIPTION                                               | FROM  |
| -------------------- | ----------------------------------- | --------------------------------------------------------- | ----- |
| `enableShortcuts?`   | `boolean`                           | Enable shortcuts                                          | 1.0.0 |
| `keyword?`           | `string`, `RegExp` or `FlagKeyword` | The initial keyword that will be highlighted in all 1.0.0 | 0.0   |
| `string[]`,          | `RegExp[]` or `FlagKeyword[]`       | You can set multiple keywords to be highlighted initially | 1.0.0 |
| `renderHighlights`   | `Function`                          | Customize the highlighted elements. See this example      | 1.0.0 |
| `onHighlightKeyword` | `Function`                          | Invoked when a keyword is highlighted                     | 1.0.0 |

By default, the shortcuts are enabled. Users can press `ctrl` + `F` to open the search popover.
The plugin instance `searchPluginInstance` provides the following properties:

| PROPERTY                  | TYPE           | DESCRIPTION                                    | FROM  |
| ------------------------- | -------------- | ---------------------------------------------- | ----- |
| `Search`                  | `ReactElement` | Customizable search control                    | 1.0.0 |
| `ShowSearchPopover`       | `ReactElement` | Customizable button to show the search popover | 1.0.0 |
| `ShowSearchPopoverButton` | `ReactElement` | The default button to show the search popover  | 1.0.0 |
| `clearHighlights`         | `Function`     | Clear the highlights                           | 1.0.0 |
| `highlight`               | `Function`     | Highlight multiple keywords                    | 1.0.0 |
| `jumpToMatch`             | `Function`     | Jump to a given match                          | 1.0.0 |
| `jumpToNextMatch`         | `Function`     | Jump to the next match                         | 1.0.0 |
| `jumpToPreviousMatch`     | `Function`     | Jump to the previous match                     | 1.0.0 |
| `setTargetPages`          | `Function`     | Set the pages that you want to search in       | 1.0.0 |

### 3. Register the plugin

Register the `search` plugin instance:

```javascript
<Viewer plugins={[searchPluginInstance]} />
```

## Properties

The `search` plugin provides other useful properties as following:

```javascript
import { NextIcon, PreviousIcon, SearchIcon } from "@sse-ui/pdf-search";
```

| PROPERTY       | TYPE           | DESCRIPTION                                               | FROM  |
| -------------- | -------------- | --------------------------------------------------------- | ----- |
| `NextIcon`     | `ReactElement` | The icon used to go to the next match in the document     | 1.0.0 |
| `PreviousIcon` | `ReactElement` | The icon used to go to the previous match in the document | 1.0.0 |
| `SearchIcon`   | `ReactElement` | The search icon                                           | 1.0.0 |
