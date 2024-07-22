import color from "cli-color";
import { describe, expect, test } from "vitest";

import { textTable } from "../index.js";

describe("ansi-colors", () => {
	test.each([
		[[[color.red("Red"), color.green("Green"), color.blue("Blue")]]],
		[
			[
				[color.red("Red"), color.green("Green"), color.blue("Blue")],
				[
					color.bold("Bold"),
					color.underline("Underline"),
					color.italic("Italic"),
				],
			],
		],
		[
			[
				[color.red("Red"), color.green("Green"), color.blue("Blue")],
				[
					color.bold("Bold"),
					color.underline("Underline"),
					color.italic("Italic"),
				],
				[
					color.inverse("Inverse"),
					color.strike("Strike"),
					color.blink("Blink"),
				],
				["bar", "45", "abcd"],
			],
		],
	])("%j", (rows) => {
		expect(
			"\n" +
				color.strip(
					textTable(rows, {
						align: ["left", "center", "left"],
						stringLength: (value) => color.strip(value).length,
					}),
				) +
				"\n",
		).toMatchSnapshot();
	});
});
