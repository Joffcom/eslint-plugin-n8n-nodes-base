import { IGNORE_SSL_ISSUES_NODE_PARAMETER } from "../constants";
import * as utils from "../utils";
import { identifiers as id } from "../utils/identifiers";
import { getters } from "../utils/getters";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description: `\`description\` for Ignore SSL node parameter must be \`${IGNORE_SSL_ISSUES_NODE_PARAMETER.DESCRIPTION}\``,
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      useIgnoreSslDescription: `Replace with '${IGNORE_SSL_ISSUES_NODE_PARAMETER.DESCRIPTION}' [autofixable]`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        if (!id.isNodeParameter(node)) return;

        if (!id.nodeParam.isIgnoreSslIssues(node)) return;

        const description = getters.nodeParam.getDescription(node);

        if (!description) return;

        const expected = IGNORE_SSL_ISSUES_NODE_PARAMETER.DESCRIPTION;

        if (description.value !== expected) {
          const fixed = utils.keyValue("description", expected);

          context.report({
            messageId: "useIgnoreSslDescription",
            node: description.ast,
            fix: (fixer) => fixer.replaceText(description.ast, fixed),
          });
        }
      },
    };
  },
});