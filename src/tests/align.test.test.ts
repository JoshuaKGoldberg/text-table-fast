import { describe, expect, test } from "vitest";

import { TableAlignment, textTable } from "../index.js";

describe("align", () => {
	test.each<[string[][], TableAlignment[]]>([
		[[["abc"]], ["right"]],
		[[["abc", "12"]], ["right", "right"]],
		[
			[
				["abc", "12"],
				["def", "3456"],
			],
			["left", "right"],
		],
		[
			[
				["abc", "1234"],
				["def", "56"],
			],
			["left", "right"],
		],
		[
			[
				["abc", "1234"],
				["def", "56"],
			],
			["right", "right"],
		],
		[
			[
				["beep", "1024"],
				["blip", "33450"],
				["abc", "1006"],
				["def", "45"],
			],
			["left", "right"],
		],
		[
			[
				["abc", "1234"],
				["def", "56"],
			],
			["center", "right"],
		],
		[
			[
				["abc", "1234"],
				["def", "56"],
			],
			["right", "left"],
		],
		[
			[
				["beep", "1234", "abc"],
				["blip", "1234567", "abc"],
				["abc", "12345", "abcdef"],
				["def", "12", "abcd"],
			],
			["left", "center", "left"],
		],
		[
			[
				["beep", "1234", "abc"],
				["blip", "1234567", "abc"],
				["abc", "12345", "abcdef"],
				["def", "12", "abcd"],
			],
			["center", "center", "center"],
		],
		[
			[
				["beep", "1234", "abc"],
				["blip", "1234567", "abc"],
				["abc", "12345", "abcdef"],
				["def", "12", "abcd"],
			],
			["center", "right", "center"],
		],
		[
			[
				["beep", "1234", "abc"],
				["blip", "1234567", "abc"],
				["abc", "12345", "abcdef"],
				["def", "12", "abcd"],
			],
			["right", "right", "right"],
		],
	])("%j %j", (rows, align) => {
		expect("\n" + textTable(rows, { align }) + "\n").toMatchSnapshot();
	});
});
