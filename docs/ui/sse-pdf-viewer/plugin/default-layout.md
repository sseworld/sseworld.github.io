---
sidebar_position: 3
title: Default Layout
---

# Default Layout plugin

The `default-layout` plugin brings the `toolbar` and a sidebar that contains the following tabs:

- A tab listing [`thumbnails`](/docs/ui/sse-pdf-viewer/plugin/thumbnail) of pages
- A tab listing [`outline bookmarks`](/docs/ui/sse-pdf-viewer/plugin/bookmark)
- A tab listing [`attachments`](/docs/ui/sse-pdf-viewer/plugin/attachment)

## Install

```
> npm install @sse-ui/pdf-default-layout
```

OR

```
> yarn add @sse-ui/pdf-default-layout
```

## Usage

### 1. Import the plugin and styles

```javascript
import { defaultLayoutPlugin } from "@sse-ui/pdf-default-layout";

// Import styles
import "@sse-ui/pdf-default-layout/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const defaultLayoutPluginInstance = defaultLayoutPlugin(
    props?: DefaultLayoutPluginProps
);
```

The optional parameter `DefaultLayoutPluginProps` represents an object of the following properties:

_(? denotes an optional property)_

| PROPERTY         | TYPE                 | DESCRIPTION                                                                  | FROM  |
| ---------------- | -------------------- | ---------------------------------------------------------------------------- | ----- |
| `setInitialTab`? | `Function`           | Set the initial tab that will be activated in the sidebar.                   | 1.0.0 |
| `sidebarTabs`?   | `Function`           | Indicate the tabs in the sidebar.                                            | 1.0.0 |
| `toolbarPlugin`? | `ToolbarPluginProps` | The options of the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) plugin. | 1.0.0 |
| `renderToolbar`? | `Function`           | Cstom toolbar renderer.                                                      | 1.0.0 |

The plugin instance `defaultLayoutPluginInstance` provides the following property:

| PROPERTY                   | TYPE               | DESCRIPTION                                                                        | FROM  |
| -------------------------- | ------------------ | ---------------------------------------------------------------------------------- | ----- |
| `activateTab`              | `Function`         | Activate a given tab                                                               | 1.0.0 |
| `attachmentPluginInstance` | `AttachmentPlugin` | The instance of the [Attachment plugin](/docs/ui/sse-pdf-viewer/plugin/attachment) | 1.0.0 |
| `bookmarkPluginInstance`   | `BookmarkPlugin`   | The instance of the [Bookmark plugin](/docs/ui/sse-pdf-viewer/plugin/bookmark)     | 1.0.0 |
| `thumbnailPluginInstance`  | `ThumbnailPlugin`  | The instance of the [THumbnail plugin](/docs/ui/sse-pdf-viewer/plugin/thumbnail)   | 1.0.0 |
| `toggleTab`                | `Function`         | Toggle a given tab                                                                 | 1.0.0 |
| `toolbarPluginInstance`    | `ToolbarPlugin`    | The instance of the [Attachment plugin](/docs/ui/sse-pdf-viewer/plugin/toolbar)    | 1.0.0 |

### 3. Register the plugin

FInally, register the `default-layout` plugin instance:

```javascript
const { Bookmarks } = defaultLayoutPluginInstance;

<Viewer plugins={[defaultLayoutPluginInstance]}> />;
```

## Properties

The `default-layout` plugin provides other properties as following:

```javascript
import {
  BookmarkIcon,
  FileIcon,
  ThumbnailIcon,
} from "@sse-ui/pdf-default-layout";
```

| PROPERTY       | TYPE           | DESCRIPTION                                         | FROM  |
| -------------- | -------------- | --------------------------------------------------- | ----- |
| `BookmarkIcon` | `ReactElement` | The icon shown in the bookmark tab in the sidebar   | 1.0.0 |
| `FileIcon`     | `ReactElement` | The icon shown in the attachment tab in the sidebar | 1.0.0 |
| `FileIcon`     | `ReactElement` | The icon shown in the thumbnail tab in the sidebar  | 1.0.0 |

## Customize the tabs in the sidebar

```javascript
const defaultLayoutPluginInstance = defaultLayoutPlugin(
    sidebarTabs: defaultTabs => {
        ...
    },
);
```

The `sidebarTabs` property is a function that takes the default tabs and returns the list of tabs you want to display in the sidebar.

Each tab defines the following properties:

```javascript
import { SidebarTab } from '@sse-ui/pdf-default-layout
```

| PROPERTY  | TYPE           | DESCRIPTION     | FROM  |
| --------- | -------------- | --------------- | ----- |
| `content` | `ReactElement` | The tab content | 1.0.0 |
| `icon`    | `ReactElement` | The tab icon    | 1.0.0 |
| `title`   | `ReactElement` | The tab title   | 1.0.0 |

The default tabs is an array of tabs listing thumbnails, bookmark and attachments in that order.

| INDEX            | DESCRIPTION               | FROM  |
| ---------------- | ------------------------- | ----- |
| `defaultTabs[0]` | The tab lists thumbnails  | 1.0.0 |
| `defaultTabs[1]` | The tab lists bookmarks   | 1.0.0 |
| `defaultTabs[2]` | The tab lists attachments | 1.0.0 |

## Open a sidebar tab

To `open a tab` in the sidebar, you can invoke the `activateTab` function:

```javascript
const { activateTab } = defaultLayoutPluginInstance;

// Open the first tab
activateTab(0);

// Open the second tab
activateTab(1);
```

## Toggle a sidebar tab

Call the `toggleTab` function to toggle a given tab:

```javascript
const { toggleTab } = defaultLayoutPluginInstance;

// Open the first tab
toggleTab(0);

// Open the second tab
toggleTab(1);
```
