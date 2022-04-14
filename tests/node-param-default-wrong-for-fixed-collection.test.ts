import rule from "../lib/rules/node-param-default-wrong-for-fixed-collection";
import { ruleTester, getRuleName } from "../lib/utils";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: `const test = {
				displayName: 'Test',
				name: 'test',
				type: 'fixedCollection',
				default: {},
			};`,
		},
	],
	invalid: [
		{
			code: `const test = {
				displayName: 'Test',
				name: 'test',
				type: 'fixedCollection',
				default: 1,
			};`,
			errors: [{ messageId: "setObjectDefault" }],
			output: `const test = {
				displayName: 'Test',
				name: 'test',
				type: 'fixedCollection',
				default: {},
			};`,
		},
	],
});
