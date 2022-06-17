import { DYNAMIC_MULTI_OPTIONS_NODE_PARAMETER } from "../constants";
import * as utils from "../utils";
import { identifiers as id } from "../utils/identifiers";
import { getters } from "../utils/getters";
import { plural, singular } from "pluralize";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description: `\`displayName\` for dynamic-multi-options-type node parameter must end with \`${DYNAMIC_MULTI_OPTIONS_NODE_PARAMETER.DISPLAY_NAME_SUFFIX}\``,
      recommended: "error",
    },
    schema: [],
    fixable: 'code',
    messages: {
      endWithNamesOrIds: `End with '{Entity} ${DYNAMIC_MULTI_OPTIONS_NODE_PARAMETER.DISPLAY_NAME_SUFFIX}' [autofixable]`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        if (!id.isNodeParameter(node)) return;

        if (!id.nodeParam.isMultiOptionsType(node)) return;

        const loadOptionsMethod = getters.nodeParam.getLoadOptionsMethod(node);

        if (!loadOptionsMethod) return;

        const displayName = getters.nodeParam.getDisplayName(node);

        if (!displayName) return;

        if (
          !displayName.value.endsWith(
            DYNAMIC_MULTI_OPTIONS_NODE_PARAMETER.DISPLAY_NAME_SUFFIX
          )
        ) {
          const { value: displayNameValue } = displayName;

          if (
            displayNameValue.split(" ").length === 1 &&
            plural(displayNameValue) === displayNameValue
          ) {
            console.log(`${singular(displayNameValue)} Names or IDs`);

            const fixed = utils.keyValue(
              "displayName",
              `${singular(displayNameValue)} Names or IDs`
            );

            return context.report({
              messageId: "endWithNamesOrIds",
              node: displayName.ast,
              fix: (fixer) => fixer.replaceText(displayName.ast, fixed),
            });
          }

          // TODO: non-single-plural-word case

          // const withEndSegment = utils.addEndSegment(displayName.value);
          // const fixed = utils.keyValue("displayName", withEndSegment);

          // context.report({
          //   messageId: "endWithNamesOrIds",
          //   node: displayName.ast,
          //   fix: (fixer) => fixer.replaceText(displayName.ast, fixed),
          // });
        }
      },
    };
  },
});
