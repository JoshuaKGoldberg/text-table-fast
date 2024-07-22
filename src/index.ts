export type GetStringLength = (value: string) => number;

export type TableAlignment = "center" | "left" | "right";

export interface TextTableOptions {
	/**
	 * The alignment for columns, in order.
	 */
	align?: TableAlignment[];

	/**
	 * Characters to put between each column.
	 */
	horizontalSeparator?: string;

	/**
	 * How to compute the length of strings, such as for stripping ANSI characters.
	 */
	stringLength?: GetStringLength;
}

const defaultStringLength: GetStringLength = (value) => String(value).length;

export function textTable(rows: string[][], opts: TextTableOptions = {}) {
	const {
		align = [],
		horizontalSeparator = "  ",
		stringLength = defaultStringLength,
	} = opts;

	const sizes = rows.reduce<number[]>(function (acc, row) {
		row.forEach(function (row, i) {
			const rowLength = stringLength(row);

			if (i >= acc.length || !acc[i] || rowLength > acc[i]) {
				acc[i] = rowLength;
			}
		});
		return acc;
	}, []);

	return rows
		.map((row) =>
			row
				.map(function (row, i) {
					const remainingWidth = sizes[i] - stringLength(row);
					const spacing = Array(Math.max(remainingWidth + 1, 1)).join(" ");

					switch (align[i]) {
						case "center":
							return (
								Array(Math.ceil(remainingWidth / 2 + 1)).join(" ") +
								row +
								Array(Math.floor(remainingWidth / 2 + 1)).join(" ")
							);

						case "right":
							return spacing + row;

						default:
							return row + spacing;
					}
				})
				.join(horizontalSeparator)
				.trimEnd(),
		)
		.join("\n");
}
