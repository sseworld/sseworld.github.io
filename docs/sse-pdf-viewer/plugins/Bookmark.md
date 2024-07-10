---
title: Bookmark
---

# Bookmark plugin

The `bookamrk` plugin lists all outline bookmarks of a PDF document. Clicking a bookmark item will jump to its associate sections

## Install

```
> npm install @sse-ui/pdf-bookmark
```

OR

```
> yarn add @sse-ui/pdf-bookmark
```

> The `bookmark` plugin is included in the [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugin

## Usage

### 1. Import the plugin and styles

```javascript
import { bookmarkPlugin } from "@sse-ui/pdf-bookmark";

// Import styles
import "@sse-ui/pdf-bookmark/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const bookmarkPluginInstance = bookmarkPlugin();
```

The plugin instance `bookmarkPluginInstance` provides the following property:

| PROPERTY    | TYPE           | DESCRIPTION                             | FROM  |
| ----------- | -------------- | --------------------------------------- | ----- |
| `Bookmarks` | `ReactElement` | The component lists available bookmarks | 1.0.0 |

### 3. Register the plugin

Register the `bookmark` plugin instance, and use the `<Bookmarks />` component to list all bookmarks.

```javascript
const { Bookmarks } = bookmarkPluginInstance;

<Viewer plugins={[bookmarkPluginInstance]}> />;
```

## Properties

The `bookmark` plugin provides other properties as following:

```javascript
import { DownArrowIcon, RightArrowIcon } from "@sse-ui/pdf-bookmark";
```

| PROPERTY         | TYPE           | DESCRIPTION          | FROM  |
| ---------------- | -------------- | -------------------- | ----- |
| `DownArrowIcon`  | `ReactElement` | The down arrow icon  | 1.0.0 |
| `RightArrowIcon` | `ReactElement` | The right arrow icon | 1.0.0 |

<!-- ## See also -->
