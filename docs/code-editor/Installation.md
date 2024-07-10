---
title: Installation
editLink: true
---

# SSE Editor

<!-- [![Versions](https://img.shields.io/npm/v/monaco-editor)](https://www.npmjs.com/package/monaco-editor)
[![Versions](https://img.shields.io/npm/v/monaco-editor/next)](https://www.npmjs.com/package/monaco-editor)
[![Feature Requests](https://img.shields.io/github/issues/microsoft/monaco-editor/feature-request.svg)](https://github.com/microsoft/monaco-editor/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/monaco-editor/bug.svg)](https://github.com/microsoft/monaco-editor/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug) -->

The SSE Editor is the fully featured code editor from [VS Code](https://github.com/microsoft/vscode). Check out the [VS Code docs](https://code.visualstudio.com/docs/editor/editingevolved) to see some of the supported features.

![image](https://user-images.githubusercontent.com/5047891/94183711-290c0780-fea3-11ea-90e3-c88ff9d21bd6.png)

## Try it out

Try out the editor and see various examples [in our interactive playground](https://microsoft.github.io/monaco-editor/playground.html).

The playground is the best way to learn about how to use the editor, which features is supports, to try out different versions and to create minimal reproducible examples for bug reports.

## Installing

```
> npm install @sseworld/code-editor
```

OR

```
> yarn add @sseworld/code-editor
```

You will get:

- inside `/esm`: ESM version of the editor (compatible with e.g. webpack)
- inside `/dev`: AMD bundled, not minified
- inside `/min`: AMD bundled, and minified
- inside `/min-maps`: source maps for `min`
- `monaco.d.ts`: this specifies the API of the editor (this is what is actually versioned, everything else is considered private and might break with any release).

It is recommended to develop against the `dev` version, and in production to use the `min` version.
