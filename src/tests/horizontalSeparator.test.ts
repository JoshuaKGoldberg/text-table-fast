import { describe, expect, test } from "vitest";

import { textTable } from "../index.js";

describe("align", () => {
	test.each<[string[][], string]>([
		[[["abc", "12"]], ""],
		[[["abc", "12"]], " "],
		[[["abc", "12"]], "  "],
		[[["abc", "12"]], "   "],
		[[["abc", "12"]], "\t"],
		[[["abc", "12"]], "|"],
		[
			[
				["abc", "12"],
				["def", "3456"],
			],
			"|",
		],
		[
			[
				["abc", "12"],
				["def", "3456"],
			],
			" | ",
		],
	])("%j %j", (rows, horizontalSeparator) => {
		expect(
			"\n" + textTable(rows, { horizontalSeparator }) + "\n",
		).toMatchSnapshot();
	});
});
