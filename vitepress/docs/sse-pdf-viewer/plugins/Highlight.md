---
title: Highlight
---

# Highlight plugin

The `highlight` plugin allows to select particular texts in the document and highlight them.

## Install

```
> npm install @sse-ui/pdf-highlight
```

OR

```
> yarn add @sse-ui/pdf-highlight
```

## Usage

### 1. Import the plugin and styles

```javascript
import { highlightPlugin } from "@sse-ui/pdf-highlight";

// Import styles
import "@sse-ui/pdf-highlight/lib/styles/index.css";
```

### 2. Create the plugin instance

```javascript
const highlightPluginInstance = highlightPlugin(props?: HighlightPluginProps);
```

The `highlightPlugin()` function takes a `HighlightPluginProps` parameter that consists of the following properties:
_(? denotes an optional property)_

| PROPERTY                  | TYPE                                          | DESCRIPTION                                                                                                              | FROM  |
| ------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----- |
| `renderHighlightTarget?`  | `RenderHighlightTargetProps => ReactElement`  | Render the element displayed after you select texts. It can be a form that allows user to add a note about selected text | 1.0.0 |
| `renderHighlightContent?` | `RenderHighlightContentProps => ReactElement` | Render the highlighted texts before you are going to do something with the selected text                                 | 1.0.0 |
| `renderHighlights?`       | `RenderHighlightsProps => ReactElement`       | Render the texts that are highlighted                                                                                    | 1.0.0 |
| `trigger?`                | `Trigger`                                     | Indicate when the highlighting is triggered                                                                              | 1.0.0 |

There are two possible values for the `trigger` option:

```javascript
import { Trigger } from "@sse-ui/pdf-highlight";

const highlightPluginInstance = highlightPlugin({
  trigger: Trigger.None,
});
```

| VALUE                   | DESCRIPTION                                                      | FROM  |
| ----------------------- | ---------------------------------------------------------------- | ----- |
| `Trigger.TextSelection` | Show the target after users select text. It is the default value | 1.0.0 |
| `Trigger.None`          | Doesn't trigger the highlight.                                   | 1.0.0 |

In the next sections, we will go through each property to demonstrate a completed example of highlighting texts.
The plugin instance `highlightPluginInstance` provides the following property:

| PROPERTY        | TYPE       | DESCRIPTION             | FROM  |
| --------------- | ---------- | ----------------------- | ----- |
| `switchTrigger` | `Function` | Switch the trigger mode | 1.0.0 |

### 3. Register the plugin

Register the `highlight` plugin instance:

```javascript
<Viewer plugins={[highlightPluginInstance]} />
```

## HighlightArea data structure

Imagine that when user selects multiple texts in the PDF document. Each selected text will be represented by its bounding rectangle:

```typescript
interface HighlightArea {
  height: number;
  left: number;
  pageIndex: number;
  top: number;
  width: number;
}
```

The `top` and `left` properties are the distances from the top-left corner of the bounding rectangle to the top and left side of pages. While `height` and `width` properties are the height and width of the rectangle. All those properties are the number of percentages, not the absolute values in pixels.
The `pageIndex` property is the index of page that the selected text belongs to.
The `HighlightArea` interface is available as following

```javascript
import { HighlightArea } from "@sse-ui/pdf-highlight";
```

## SelectionData data structure

Each page of the document consists of different layers including canvas, annotations, texts. The text layer is a `div` element that renders all texts in the page.
It is constructed by multiple `span` (or `div`) elements. In order to store exactly the text user selects, we need the `SelectionData` data structure:

```typescript
interface SelectionData {
  startPageIndex: number;
  startOffset: number;
  startDivIndex: number;
  endPageIndex: number;
  endOffset: number;
  endDivIndex: number;
}
```

The `startPageIndex` is the index of starting page. The `startOffset` property is the index of starting character in the starting text element which is determined by the `startDivIndex` property.
The same definitions are used for the `endPageIndex`, `endOffset` and `endDivIndex` properties.
The `SelectionData` interface is available as following

```javascript
import { SelectionData } from "@sse-ui/pdf-highlight";
```

Before diving in a completed example, let's assume that we are going to add note for selected texts. Each note has the following structure:

```typescript
interface Note {
  // The generated unique identifier
  id: number;
  // The note content
  content: string;
  // The list of highlight areas
  highlightAreas: HighlightArea[];
  // The selected text
  quote: string;
}
```

## renderHighlightTarget

This prop is used to render a custom target (a button, for example) that is used to trigger the form for adding a note.
`renderHighlightTarget` provides the following properties:

| PROPERTY          | TYPE              | DESCRIPTION                                    | FROM  |
| ----------------- | ----------------- | ---------------------------------------------- | ----- |
| `cancel()`        | `Function`        | Cancel the selection                           | 1.0.0 |
| `highlightAreas`  | `HighlightArea[]` | The list of highlight areas                    | 1.0.0 |
| `selectedText`    | `string`          | The selected text                              | 1.0.0 |
| `selectionData`   | `SelectionData`   | The selection data                             | 1.0.0 |
| `selectionRegion` | `HighlightArea`   | The area represents the entire selected region | 1.0.0 |
| `toggle()`        | `Function`        | Switch to the hightlighting state              | 1.0.0 |

The following sample code displays a button after user selects text in the document:

```javascript
import {
  highlightPlugin,
  MessageIcon,
  RenderHighlightTargetProps,
} from "@sse-ui/pdf-highlight";
import { Button, Position, Tooltip } from "@sse-ui/pdf-core";

const renderHighlightTarget = (props: RenderHighlightTargetProps) => (
  <div
    style={{
      background: "#eee",
      display: "flex",
      position: "absolute",
      left: `${props.selectionRegion.left}%`,
      top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
      transform: "translate(0, 8px)",
    }}
  >
    <Tooltip
      position={Position.TopCenter}
      target={
        <Button onClick={props.toggle}>
          <MessageIcon />
        </Button>
      }
      content={() => <div style={{ width: "100px" }}>Add a note</div>}
      offset={{ left: 0, top: -8 }}
    />
  </div>
);

const highlightPluginInstance = highlightPlugin({
  renderHighlightTarget,
});
```

## renderHighlightContent

This prop is used to render an element which is shown after user switches to the highlighting mode. Technically, it's called after the `renderHighlightTarget`'s `toggle()` is invoked.
`renderHighlightContent` provides the following properties:

| PROPERTY          | TYPE              | DESCRIPTION                                    | FROM  |
| ----------------- | ----------------- | ---------------------------------------------- | ----- |
| `cancel()`        | `Function`        | Cancel the selection                           | 1.0.0 |
| `highlightAreas`  | `HighlightArea[]` | The list of highlight areas                    | 1.0.0 |
| `selectedText`    | `string`          | The selected text                              | 1.0.0 |
| `selectionData`   | `SelectionData`   | The selection data                             | 1.0.0 |
| `selectionRegion` | `HighlightArea`   | The area represents the entire selected region | 1.0.0 |

To make it simple, we just show a textarea for user to enter the note's message:

```javascript
// Store the current note's message
const [message, setMessage] = React.useState("");

const renderHighlightContent = (props: RenderHighlightContentProps) => {
  const addNote = () => {
    // We will implement it later
  };

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(0, 0, 0, .3)",
        borderRadius: "2px",
        padding: "8px",
        position: "absolute",
        left: `${props.selectionRegion.left}%`,
        top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
        zIndex: 1,
      }}
    >
      <div>
        <textarea
          rows={3}
          style={{
            border: "1px solid rgba(0, 0, 0, .3)",
          }}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "8px",
        }}
      >
        <div style={{ marginRight: "8px" }}>
          <PrimaryButton onClick={addNote}>Add</PrimaryButton>
        </div>
        <Button onClick={props.cancel}>Cancel</Button>
      </div>
    </div>
  );
};
```

Clicking the _Add_ button will call the `addNote` function. In addition to track the current `message`, we also need to store the list of notes, and the latest `id` for note.
In reality, you might store and load notes from the database. In our example, the note's `id` is generated manually.

```javascript
const [notes, setNotes] = React.useState<Note[]>([]);
let noteId = notes.length;
```

The function to add a note is quite simple:

```javascript
const renderHighlightContent = (props: RenderHighlightContentProps) => {
  const addNote = () => {
    // Only add message if it's not empty
    if (message !== "") {
      const note: Note = {
        // Increase the id manually
        id: ++noteId,
        content: message,
        highlightAreas: props.highlightAreas,
        quote: props.selectedText,
      };
      setNotes(notes.concat([note]));

      // Close the form
      props.cancel();
    }
  };
};
```

## renderHighlights

The highlight areas now are ready in the local state of component. It is the time to display them via the `renderHighlights` prop.
`renderHighlights` provides the following properties:

| PROPERTY           | TYPE       | DESCRIPTION                                                       | FROM  |
| ------------------ | ---------- | ----------------------------------------------------------------- | ----- |
| `getCssProperties` | `Function` | Returns the CSS styles used to position a highlight area on pages | 1.0.0 |
| `pageIndex`        | `number`   | The page index of highlight area                                  | 1.0.0 |
| `rotation`         | `number`   | The current number of rotated degrees of the document             | 1.0.0 |

The `getCssProperties` function has the signature of

```typescript
(area: HighlightArea, rotation: number) => React.CSSProperties;
```

| PARAMETER  | TYPE            | DESCRIPTION                                           | FROM  |
| ---------- | --------------- | ----------------------------------------------------- | ----- |
| `area`     | `HighlightArea` | The highlight area                                    | 1.0.0 |
| `rotation` | `number`        | The current number of rotated degrees of the document | 1.0.0 |

The `rotation` parameter ensures that the highlight area is positioned properly even if user [rotates](/docs/sse-pdf-viewer/plugins/Rotate) the document.
Listing all highlights on page is simple as following:

```typescript
const renderHighlights = (props: RenderHighlightsProps) => (
  <div>
    {notes.map((note) => (
      <React.Fragment key={note.id}>
        {note.highlightAreas
          // Filter all highlights on the current page
          .filter((area) => area.pageIndex === props.pageIndex)
          .map((area, idx) => (
            <div
              key={idx}
              style={Object.assign(
                {},
                {
                  background: "yellow",
                  opacity: 0.4,
                },
                props.getCssProperties(area, props.rotation)
              )}
            />
          ))}
      </React.Fragment>
    ))}
  </div>
);
```

## Display notes in a sidebar

We would like to list notes in a sidebar. The markup of sidebar and viewer look like as following

```javascript
<div
  style={{
    border: "1px solid rgba(0, 0, 0, 0.3)",
    display: "flex",
    height: "100%",
    overflow: "hidden",
  }}
>
  <div
    style={{
      borderRight: "1px solid rgba(0, 0, 0, 0.3)",
      width: "25%",
      overflow: "auto",
    }}
  >
    Sidebar
  </div>
  <div
    style={{
      flex: "1 1 0",
    }}
  >
    Viewer
  </div>
</div>
```

Now we can loop over the notes and display one by one:

```javascript
const sidebarNotes = (
  <>
    {notes.length === 0 && <div>There is no note</div>}
    {notes.map((note) => {
      return (
        <div key={note.id}>
          <blockquote>{note.quote}</blockquote>
          {note.content}
        </div>
      );
    })}
  </>
);
```

## Jump to a highlight area when clicking a note

The `highlightPluginInstance` created by the `highlightPlugin()` function provides a method for that purpose.

```javascript
const { jumpToHighlightArea } = highlightPluginInstance;

const sidebarNotes = (
  <>
    {notes.map((note) => {
      return (
        <div
          key={note.id}
          // Jump to the associated highlight area
          onClick={() => jumpToHighlightArea(note.highlightAreas[0])}
        >
          ...
        </div>
      );
    })}
  </>
);
```

## Jump to a note in sidebar when clicking its highlight area

To do that, we need to keep the relationship between a note's `id` and its note element in the sidebar.

```typescript
const noteEles: Map<number, HTMLElement> = new Map();
```

The map will be updated when a highlight is rendered:

```typescript
const renderHighlights = (props: RenderHighlightsProps) => (
  <div>
    {notes.map((note) => (
      <React.Fragment key={note.id}>
        {note.highlightAreas
          .filter((area) => area.pageIndex === props.pageIndex)
          .map((area, idx) => (
            <div
              // We will implement `jumpToNote` later
              onClick={() => jumpToNote(note)}
              ref={(ref): void => {
                // Update the map
                noteEles.set(note.id, ref as HTMLElement);
              }}
            />
          ))}
      </React.Fragment>
    ))}
  </div>
);
```

Clicking a highlight will jump to its note in the sidebar:

```typescript
const jumpToNote = (note: Note) => {
  if (noteEles.has(note.id)) {
    noteEles.get(note.id).scrollIntoView();
  }
};
```

## Integrate with Default Layout plugin

This section introduces the steps to integrate the highlight with [default-layout plugin](/docs/sse-pdf-viewer/plugins/Default-layout).
In order to move the list of notes into the sidebar, we create a new tab for the sidebar:

```javascript
import { defaultLayoutPlugin } from "@sse-ui/pdf-default-layout";
import { MessageIcon } from "@sse-ui/pdf-highlight";

const defaultLayoutPluginInstance = defaultLayoutPlugin({
  sidebarTabs: (defaultTabs) =>
    defaultTabs.concat({
      content: sidebarNotes,
      icon: <MessageIcon />,
      title: "Notes",
    }),
});
```

The `sidebarTabs` propety defines the list of tabs that will be shown in the sidebar. It is a function taking the default tabs, and returns the list of tabs.
In our specific example, the tab showing all notes is the last one.

## Open the tab when clicking a highlight

As mentioned in the previous section, clicking a highlight area will jump to the associated note in the sidebar.
Since the tab listing all notes can be closed, we have to open the tab first to make sure the notes visible:

```javascript
const { activateTab } = defaultLayoutPluginInstance;

const jumpToNote = (note: Note) => {
  // Open the tab
  activateTab(3);

  // Jump to the note
  // ...
};
```

The `activateTab` function accepts the index of tab that you want to open. Our specific example has four tabs, and the tab showing all notes is the last one.

## Clear the notes when opening other document

The last but not least thing is do not forget to reset (or load new notes) when user opens new document. We can do it by handling the `onDocumentLoad` event:

```javascript
const [currentDoc, setCurrentDoc] =
  (React.useState < PdfJs.PdfDocument) | (null > null);

const handleDocumentLoad = (e: DocumentLoadEvent) => {
  setCurrentDoc(e.doc);
  if (currentDoc && currentDoc !== e.doc) {
    // User opens new document
    setNotes([]);
  }
};

<Viewer onDocumentLoad={handleDocumentLoad} />;
```

## See also

- [Render the highlight areas](https://react-pdf-viewer.dev/examples/render-the-highlight-areas/)
