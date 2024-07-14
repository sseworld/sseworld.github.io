---
title: Drop
sidebar_position: 4
---

# Drop plugin

the `drop` plugin allows to open a PDF documnet by dragging and dropping it on the viewer container element.
It adds an element on top of the container element indicating that you can drag the document:.

## Install

```
> npm install @sse-ui/pdf-drop
```

OR

```
> yarn add @sse-ui/pdf-drop
```

## Usage

### 1. Import the plugin and styles

```javascript
import { dropPlugin } from "@sse-ui/pdf-drop";

// Import styles
import "@sse-ui/pdf-drop/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const dropPluginInstance = dropPlugin();
```

### 3. Register the plugin

Register the `drop` plugin instance:

```javascript
<Viewer plugins={[dropPluginInstance]}> />;
```
