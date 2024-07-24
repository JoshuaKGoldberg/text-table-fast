<h1 align="center">text-table-fast</h1>

<p align="center">
	Generates borderless text table strings suitable for printing to stdout.
	Fast.
	🏁
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/text-table-fast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/text-table-fast" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/text-table-fast?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/text-table-fast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/text-table-fast"><img alt="📦 npm version" src="https://img.shields.io/npm/v/text-table-fast?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i text-table-fast
```

```ts
import { textTable } from "text-table-fast";

console.log(
	textTable([
		["main", "0123456789abcdef"],
		["staging", "fedcba9876543210"],
	]),
);
```

```plaintext
main     0123456789abcdef
staging  fedcba9876543210
```

`textTable` takes in an array of arrays containing strings, numbers, or other printable values.

## Options

`text-table-fast`'s `textTable` can take in an optional second parameter as an object with options

> 🔄 These options are equivalent to [`text-table`](https://www.npmjs.com/package/text-table)'s options, but with expanded names.

### `align`

- Default: `[]`
- Type: `("center" | "left" | "right")[]`

The alignment for columns, in order.
These each default to `"left"`.

```ts
import { textTable } from "text-table-fast";

console.log(
	textTable(
		[
			["abc", "abcd", "ab"],
			[1234, 12, 1234],
		],
		{
			alignment: ["left", "center", "right"],
		},
	),
);
```

```plaintext
abc  abcd  abc
1234  12  1234
```

### `horizontalSeparator`

- Default: `"  "`
- Type: `string`

Characters to put between each column.

```ts
import { textTable } from "text-table-fast";

console.log(
	textTable(
		[
			["abc", "abcd", "ab"],
			[1234, 12, 1234],
		],
		{
			horizontalSeparator: " | ",
		},
	),
);
```

```plaintext
abc  | abcd |  abc
1234 |  12  | 1234
```

### `stringLength`

- Default: `(value) => String(value).length`
- Type: `(value: string) => number`

How to compute the length of strings, such as for stripping ANSI characters.

```ts
import color from "cli-color";
import { textTable } from "text-table-fast";

console.log(
	textTable(
		[
			[color.red("abc"), color.blue("def")],
			[12, 34],
		],
		{
			stringLength: (value) => color.strip(value).length,
		},
	),
);
```

```plaintext
\x1B[31mabc\x1B[39m  \x1B[34mdef\x1B[39m
12  34
```

## Comparison to [`text-table`](https://www.npmjs.com/package/text-table)

`text-table-fast` has three advantages over `text-table`:

- It is faster in almost all scenarios, and significantly faster on larger tables.
- It is under active maintenance, whereas `text-table` hasn't been updated in over a decade.
- It's written in TypeScript and ships with its own `.d.ts` types, whereas `text-table` requires `@types/text-table` for typings.

### Performance Comparison

`text-table-fast` contains two meaningful optimizations over `text-table`:

- `text-table` includes usage of of [an quadratically expensive `/\s+$/`](https://ota-meshi.github.io/eslint-plugin-regexp/playground/#eJyrVkrOT0lVslLSj4kp1lbRV6oFADQgBS4=); `text-table-fast` uses [`String.prototype.trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) instead.
- `text-table` executes a regular expression match on each row cell for its `'.'` (decimal) alignment option; `text-table-fast` will skip that match if and when decimal alignment support is added.

See [eslint/eslint#18709 Performance: long print time in stylish formatter's text-table for long report strings](https://github.com/eslint/eslint/issues/18709) for a performance comparison.

## Markdown Generation

This package does not generate complaint Markdown tables.
Doing so requires handling special characters in cell data.
You're better off using a dedicated package such as [`markdown-table`](https://www.npmjs.com/package/markdown-table).

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/text-table-fast/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/text-table-fast/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

## Acknowledgements

This package is a near-drop-in replacement for venerable [`text-table`](https://www.npmjs.com/package/text-table), which has served a plethora of projects -including ESLint- well for over a decade.
Many thanks to substack for creating the original `text-table` package! 💖

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
