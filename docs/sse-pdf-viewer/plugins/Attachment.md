---
title: Attachment
---

# Attachment plugin

The `attachment` plugin lists all attachments of a PDF document.

## Install

```
> npm install @sse-ui/pdf-attachment
```

OR

```
> yarn add @sse-ui/pdf-attachment
```

> The `attachment` plugin is included in the [default-layout](/docs/sse-pdf-viewer/plugins/Default-layout) plugin

## Usage

### 1. Import the plugin and styles

```javascript
import { attachmentPlugin } from "@sse-ui/pdf-attachment";

// Import styles
import "@sse-ui/pdf-attachment/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const attachmentPluginInstance = attachmentPlugin();
```

The plugin instance `attachmentPluginInstance` provides the following property:

| PROPERTY      | TYPE           | DESCRIPTION                               | FROM  |
| ------------- | -------------- | ----------------------------------------- | ----- |
| `Attachments` | `ReactElement` | The component lists available attachments | 1.0.0 |

### 3. Register the plugin

Register the `attachment` plugin instance, and use the `<Attachments />` component to list all attachments.

```javascript
const { Attachments } = attachmentPluginInstance;

<Viewer plugins={[attachmentPluginInstance]}> />;
```

<!-- ## See also -->
