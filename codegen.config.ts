import config from './src/config/config.json';
import { CodegenConfig } from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
  schema: config.GRAPHQL_URL,
  ignoreNoDocuments: true,
  generates: {
    'src/types/generated/graphqlScheme.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
      ],
      config: {
        withHooks: true,
        withResultType: true,
      },
    },
  },
};

export default codegenConfig;
