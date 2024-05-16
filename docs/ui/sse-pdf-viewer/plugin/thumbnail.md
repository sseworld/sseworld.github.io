---
sidebar_position: 17
title: Thumbnail
---

# Thumbnail plugin

The `thumbnail` plugin previews document pages as thumbnails. Clicking a particular thumbnail will jump to associate page.

## Install

```
> npm install @sse-ui/pdf-thumbnail;
```

OR

```
> yarn add @sse-ui/pdf-thumbnail;
```

> The `thumbnail` plugin is included in the [toolbar](/docs/ui/sse-pdf-viewer/plugin/toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { thumbnailPlugin } from "@sse-ui/pdf-thumbnail";

// Import styles
import "@sse-ui/pdf-thumbnail/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const thumbnailPluginInstance = thumbnailPlugin(props?: ThumbnailPluginProps);
```

The `thumbnailPlugin()` function takes a `ThumbnailPluginProps` parameter that consists of the following property:
_(? denotes an optional property)_

| PROPERTY                  | TYPE                                           | DESCRIPTION                                                   | FROM  |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------------------- | ----- |
| `renderCurrentPageLabel`? | `RenderCurrentPageLabelProps =>  ReactElement` | Render custom page label for each thumbnail.                  | 1.0.0 |
| `renderSpinner`?          | `() =>  React.ReactElement`                    | Custom loading indicator that replaces the default `Spinner`. | 1.0.0 |
| `thumbnailWidth`?         | `number`                                       | The width of thumbnails.                                      | 1.0.0 |

The plugin instance `thumbnailPluginInstance` provides the following property:

| PROPERTY     | TYPE           | DESCRIPTION                               | FROM  |
| ------------ | -------------- | ----------------------------------------- | ----- |
| `Cover`      | `ReactElement` | Shows the thumbnail of a particular page. | 1.0.0 |
| `Thumbnails` | `ReactElement` | Previews all thumbnails                   | 1.0.0 |

### 3. Register the plugin

Register the `thumbnail` plugin instance, and use the `<Thumbnails />` component to display all thumbnails.

```javascript
const { Thumbnails } = thumbnailPluginInstance;

<Viewer plugins={[thumbnailPluginInstance]} />;
```
