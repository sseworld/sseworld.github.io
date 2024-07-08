---
sidebar_position: 6
title: Get File
---

# Get File plugin

The `get-file` plugin provides a button that can be used to download the PDF document. It is able to customize the download button as well.

## Install

```
> npm install @sse-ui/pdf-get-file
```

OR

```
> yarn add @sse-ui/pdf-get-file
```

> The `get-file` plugin is included in the [toolbar](/docs/sse-pdf-viewer/plugins/Toolbar) and [default-layout](/docs/ui/sse-pdf-viewer/plugin/default-layout) plugins

## Usage

### 1. Import the plugin

```javascript
import { getFilePlugin } from "@sse-ui/pdf-get-file";
```

### 2. Create the plugin instance

```javascript
const getFilePluginInstance = getFilePlugin(props?: GetFilePluginProps);
```

The `getFilePlugin()` function takes a `GetFilePluginProps` parameter that consists of the following property:

| PROPERTY            | TYPE                 | DESCRIPTION                        | FROM  |
| ------------------- | -------------------- | ---------------------------------- | ----- |
| `fileNameGenerator` | `OpenFile => String` | Generate the name of download file | 1.0.0 |

The plugin instance `getFilePluginInstance` provides the following properties:

| PROPERTY           | TYPE           | DESCRIPTION                    | FROM  |
| ------------------ | -------------- | ------------------------------ | ----- |
| `Download`         | `ReactElement` | Customizable download button   | 1.0.0 |
| `DownloadButton`   | `ReactElement` | The default download button    | 1.0.0 |
| `DownloadMenuItem` | `ReactElement` | The default download menu item | 1.0.0 |

### 3. Register the plugin

Finally, register the `get-file` plugin instance:

```javascript
<Viewer plugins={[getFilePluginInstance]} />
```

## Properties

The `get-file` plugin provides other useful property as following:

```javascript
import { DownloadIcon } from "@sse-ui/pdf-open";
```

| PROPERTY       | TYPE           | DESCRIPTION            | FROM  |
| -------------- | -------------- | ---------------------- | ----- |
| `DownloadIcon` | `ReactElement` | The download file icon | 1.0.0 |
