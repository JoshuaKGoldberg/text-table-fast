import { describe, expect, test } from "vitest";

import { textTable } from "../index.js";

describe("general", () => {
	test.each([
		[[["main", "0123456789abcdef"]]],
		[
			[
				["main", "0123456789abcdef"],
				["staging", "fedcba9876543210"],
			],
		],
		[
			[
				["master", "0123456789abcdef"],
				["staging", "fedcba9876543210"],
			],
		],
	])("%j", (rows) => {
		expect("\n" + textTable(rows) + "\n").toMatchSnapshot();
	});
});
