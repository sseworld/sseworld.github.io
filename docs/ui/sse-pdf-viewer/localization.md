---
sidebar_position: 3
title: Localization
---

# Localization

React PDF Viewer provides different localization files that can be used to localize the user interface.

## Installing

```
> npm install @sse-ui/pdf-locales;
```

OR

```
> yarn add @sse-ui/pdf-locales;
```

## Using a localization file

The `locales` package provides the following localization files whose each of them is a JSON file:

| LOCALE                | FILE             | FROM  |
| --------------------- | ---------------- | ----- |
| Arabic                | `lib/ar_AE.json` | 1.0.0 |
| Chinese (simplified)  | `lib/zh_CN.json` | 1.0.0 |
| Chinese (traditional) | `lib/zh_TW.json` | 1.0.0 |
| English               | `lib/en_US.json` | 1.0.0 |
| French                | `lib/fr_FR.json` | 1.0.0 |
| German                | `lib/de_DE.json` | 1.0.0 |
| Italian               | `lib/it_IT.json` | 1.0.0 |
| Japanese              | `lib/jp_JP.json` | 1.0.0 |
| Korean                | `lib/ko_KR.json` | 1.0.0 |
| Portuguese            | `lib/pt_PT.json` | 1.0.0 |
| Russian               | `lib/ru_RU.json` | 1.0.0 |
| Spanish               | `lib/es_ES.json` | 1.0.0 |
| Vietnamese            | `lib/vi_VN.json` | 1.0.0 |

In order to use the given localization file, you need to import it and pass it to the `localization` option of the `Viewer` component.

The example below applies the German localization file:

```js
import { LocalizationMap, Viewer } from "@sse-ui/pdf-core";

// Import the localization file
import de_DE from "@sse-ui/pdf-locales/lib/de_DE.json"

// render function
<Viewer localization={ de_DE as unknown as LocalizationMap } />
```

You can use the [Locale Switcher](/docs/ui/sse-pdf-viewer/plugin/locale-switcher.md) plugin to add a menu that allows users to switch between different locales.

## Using a RTL longuage

If you want to use a RTL language such as Arabic, it's recommende to use the `direction` options. So the user interface is shown in the same direction.