import { identifiers as id } from "../utils/identifiers";
import { getters } from "../utils/getters";
import * as utils from "../utils";
import { COMMUNITY_PACKAGE_JSON } from "../constants";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description: `\`name\` key in \`package.json\` of community package must be different from the default \`${COMMUNITY_PACKAGE_JSON.NAME}\``,
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      updateName: "Update the `name` key in package.json",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        const isTestRun = process.env.NODE_ENV === "test";
        const isProdRun = !isTestRun;
        const filename = context.getFilename();

        if (isProdRun && !filename.includes("package.json")) return;
        if (isProdRun && !id.prod.isTopLevelObjectExpression(node)) return;
        if (isTestRun && !id.test.isTopLevelObjectExpression(node)) return;

        const name = getters.packageJson.getName(node);

        if (!name) return;

        if (name.value === COMMUNITY_PACKAGE_JSON.NAME) {
          context.report({
            messageId: "updateName",
            node,
          });
        }
      },
    };
  },
});
