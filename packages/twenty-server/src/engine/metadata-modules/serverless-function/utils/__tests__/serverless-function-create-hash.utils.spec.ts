import { serverlessFunctionCreateHash } from 'src/engine/metadata-modules/serverless-function/utils/serverless-function-create-hash.utils';

describe('serverlessFunctionCreateHash', () => {
  it('should return a hash', () => {
    expect(
      serverlessFunctionCreateHash({
        dependencies: {
          'twenty-sdk': '0.1.0',
          axios: '^1.12.2',
        },
      }),
    ).toBe('5dd534c1af734184608e5e903dcf6b86');
  });

  it('should support different ordering', () => {
    expect(
      serverlessFunctionCreateHash({
        dependencies: {
          axios: '^1.12.2',
          'twenty-sdk': '0.1.0',
        },
      }),
    ).toBe('5dd534c1af734184608e5e903dcf6b86');
  });

  it('should differs if versions differ', () => {
    expect(
      serverlessFunctionCreateHash({
        dependencies: {
          axios: '^1.12.2',
          'twenty-sdk': '0.1.2',
        },
      }),
    ).toBe('9e8d875eb5d18b818d5546417269a18b');
  });
});
