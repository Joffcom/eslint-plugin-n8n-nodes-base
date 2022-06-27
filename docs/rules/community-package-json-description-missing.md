[//]: # "File generated from a template. Do not edit this file directly."

# community-package-json-description-missing

The `description` key must be present in the `package.json` of a community package.

📋 This rule is part of the `plugin:n8n-nodes-base/community` config.

## Examples

❌ Example of **incorrect** code:

```json
{
  "name": "n8n-nodes-service",
  "version": "0.1.1",
  "_description": "Consumes Service API",
  "license": "MIT",
  "author": {
    "name": "John Smith",
    "email": "john.smith@mail.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/johnsmith/n8n-nodes-service.git"
  },
  "keywords": ["n8n-community-node-package"],
  "main": "index.js",
  "scripts": {
    "dev": "npm run watch",
    "build": "tsc && gulp",
    "lint": "tslint -p tsconfig.json -c tslint.json && node_modules/eslint/bin/eslint.js ./nodes",
    "lintfix": "tslint --fix -p tsconfig.json -c tslint.json && node_modules/eslint/bin/eslint.js --fix ./nodes",
    "watch": "tsc --watch",
    "test": "jest"
  },
  "files": ["dist"],
  "n8n": {
    "credentials": ["dist/credentials/ServiceApi.credentials.js"],
    "nodes": ["dist/nodes/Service/Service.node.js"]
  },
  "devDependencies": {
    "@types/express": "^4.17.6",
    "@types/request-promise-native": "~1.0.15",
    "@typescript-eslint/parser": "^5.29.0",
    "eslint-plugin-n8n-nodes-base": "^1.0.43",
    "gulp": "^4.0.2",
    "jest": "^26.4.2",
    "n8n-workflow": "~0.104.0",
    "ts-jest": "^26.3.0",
    "tslint": "^6.1.2",
    "typescript": "~4.3.5"
  },
  "dependencies": {
    "n8n-core": "~0.101.0"
  }
}
```

✅ Example of **correct** code:

```json
{
  "name": "n8n-nodes-service",
  "version": "0.1.1",
  "description": "Consumes Service API",
  "license": "MIT",
  "author": {
    "name": "John Smith",
    "email": "john.smith@mail.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/johnsmith/n8n-nodes-service.git"
  },
  "keywords": ["n8n-community-node-package"],
  "main": "index.js",
  "scripts": {
    "dev": "npm run watch",
    "build": "tsc && gulp",
    "lint": "tslint -p tsconfig.json -c tslint.json && node_modules/eslint/bin/eslint.js ./nodes",
    "lintfix": "tslint --fix -p tsconfig.json -c tslint.json && node_modules/eslint/bin/eslint.js --fix ./nodes",
    "watch": "tsc --watch",
    "test": "jest"
  },
  "files": ["dist"],
  "n8n": {
    "credentials": ["dist/credentials/ServiceApi.credentials.js"],
    "nodes": ["dist/nodes/Service/Service.node.js"]
  },
  "devDependencies": {
    "@types/express": "^4.17.6",
    "@types/request-promise-native": "~1.0.15",
    "@typescript-eslint/parser": "^5.29.0",
    "eslint-plugin-n8n-nodes-base": "^1.0.43",
    "gulp": "^4.0.2",
    "jest": "^26.4.2",
    "n8n-workflow": "~0.104.0",
    "ts-jest": "^26.3.0",
    "tslint": "^6.1.2",
    "typescript": "~4.3.5"
  },
  "dependencies": {
    "n8n-core": "~0.101.0"
  }
}
```

## Links

- [Rule source](../../lib/rules/community-package-json-description-missing.ts)
- [Test source](../../tests/community-package-json-description-missing.test.ts)