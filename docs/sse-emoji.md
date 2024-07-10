---
title: SSE Emoji
---

<h1 align="center">SSE Emoji</h1>

<p align="center">Friendly emoji lookups and parsing utilities for Node.js. 💖</p>

`@ssets/emoji` provides a fun, straightforward interface on top of the following excellent libraries:

- [`emojilib`](https://npmjs.org/package/emojilib): provides a list of emojis and keyword search on top of it
- [`skin-tone`](https://npmjs.org/package/skin-tone): parses out base emojis from skin tones

## Install

```sh
npm install @ssets/emoji
```

### 2.0 Release 🚀

This is the new 2.0 release of @ssets/emoji, supporting ESM, new emoji and a new API.

If you want to use the old version, please check out the [legacy branch](https://github.com/sseworld/emoji).

## Usage

```js
import * as emoji from "@ssets/emoji";

emoji.emojify("I :heart: :coffee:!"); // 'I ❤️ ☕️!'

emoji.find("heart"); // { emoji: '❤', name: 'heart' }
emoji.find("❤️"); // { emoji: '❤', name: 'heart' }

emoji.get("unicorn"); // 🦄
emoji.get(":unicorn:"); // 🦄

emoji.has(":pizza:"); // true
emoji.has("🍕"); // true
emoji.has("unknown"); // false

emoji.random(); // { name: 'house', emoji: '🏠' }

emoji.replace("I ❤️ coffee!", "love", { preserveSpaces: true }); // 'I love coffee!'

emoji.search(":uni:"); // [ { emoji: '🦄', name: 'unicorn' }, ... ]

emoji.strip("I ❤️ coffee!"); // 'I coffee!'

emoji.unemojify("🍕 for 💃"); // ':pizza: for :dancer:'

emoji.which("🦄"); // 'unicorn'
```

## API

### emoji.emojify(input, options?)

Parse all markdown-encoded emojis in a string.

Parameters:

1. **`input`** (`string`): The input string containing the markdown-encoding emojis.
1. **`options`** _(optional)_:
   - **`fallback`** (`string`; default: `""`): The string to fallback to if an emoji was not found.
   - **`format`** (`() => (emoji: string, part: string, string: string) => string`; default: `value => value`): Add a middleware layer to modify each matched emoji after parsing.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.emojify("The :unicorn: is a fictitious animal."));
// 'The 🦄 is a fictitious animal.'
```

### emoji.find(emoji)

Get the name and character of an emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to get the data of.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.find("🦄"));
// { name: 'unicorn', emoji: '🦄' }
```

### emoji.get(name)

Get an emoji from an emoji name.

Parameters:

1. **`name`** (`string`): The name of the emoji to get.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.get("unicorn"));
// '🦄'
```

### emoji.has(emoji)

Check if this library supports a specific emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to check.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.has("🦄"));
// true
```

### emoji.random()

Get a random emoji.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.random());
// { name: 'unicorn', emoji: '🦄' }
```

### emoji.replace(input, replacement)

Replace the emojis in a string.

Parameters:

- **`input`** (`string`): The input string.
- **`replacement`** (`string | (emoji: string, index: number, string: string) => string`): The character to replace the emoji with.
  Can be either a string or a callback that returns a string.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.replace("The 🦄 is a fictitious animal.", "unicorn"));
// 'The unicorn is a fictitious animal.'
```

### emoji.search(keyword)

Search for emojis containing the provided name in their name.

Parameters:

1. **`keyword`** (`string`): The keyword to search for.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.search("honey"));
// [ { name: 'honeybee', emoji: '🐝' }, { name: 'honey_pot', emoji: '🍯' } ]
```

### emoji.strip(input, options?)

Remove all of the emojis from a string.

Parameters:

1. **`input`** (`string`): The input string to strip the emojis from.
1. **`options`** _(optional)_:

   - **`preserveSpaces`** (`boolean`): Whether to keep the extra space after a stripped emoji.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.strip("🦄 The unicorn is a fictitious animal."));
// 'The unicorn is a fictitious animal.'

console.log(
  emoji.strip("🦄 The unicorn is a fictitious animal.", {
    preserveSpaces: true,
  })
);
// ' The unicorn is a fictitious animal.'
```

### emoji.unemojify(input)

Convert all emojis in a string to their markdown-encoded counterparts.

Parameters:

1. **`input`** (`string`): The input string containing the emojis.

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.unemojify("The 🦄 is a fictitious animal."));
// 'The :unicorn: is a fictitious animal.'
```

### emoji.which(emoji, options?)

Get an emoji name from an emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to get the name of.
1. **`options`** _(optional)_:
   - **`markdown`** (`boolean`; default: `false`): Whether to return a `":emoji:"` string instead of `"emoji"`

```js
import * as emoji from "@ssets/emoji";

console.log(emoji.which("🦄"));
// 'unicorn'
```

## License

- MIT

### Special Thanks

...to SSE World (@sseworld) and his company [ssewofficial](https://github.com/ssewofficial)

<!-- spellchecker: disable -->
<!-- spellchecker: enable -->
