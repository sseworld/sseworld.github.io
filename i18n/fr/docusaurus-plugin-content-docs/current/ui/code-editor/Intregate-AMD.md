---
sidebar_position: 3
title: Intregate AMD
---

## Integrating the AMD version of the SSE Editor

Here is the most basic HTML page that embeds the editor using AMD.

<!-- More self-contained samples are available in the [samples folder](../samples/). -->

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  </head>
  <body>
    <div
      id="container"
      style="width:800px;height:600px;border:1px solid grey"
    ></div>

    <script src="sse-editor/min/vs/loader.js"></script>
    <script>
      require.config({ paths: { vs: "sse-editor/min/vs" } });
      require(["vs/editor/editor.main"], function () {
        var editor = sse.editor.create(
          document.getElementById("container"),
          {
            value: [
              "function x() {",
              '\tconsole.log("Hello world!");',
              "}",
            ].join("\n"),
            language: "javascript",
          }
        );
      });
    </script>
  </body>
</html>
```
