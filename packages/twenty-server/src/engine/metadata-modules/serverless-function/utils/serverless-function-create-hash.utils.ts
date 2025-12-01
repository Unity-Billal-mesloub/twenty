import { createHash } from 'crypto';

import { type PackageJson } from 'src/engine/core-modules/application/types/application.types';

export const serverlessFunctionCreateHash = (packageJson: PackageJson) => {
  const normalize = (obj: Record<string, string>) =>
    Object.keys(obj)
      .sort()
      .reduce<Record<string, string>>((acc, key) => {
        acc[key] = obj[key];

        return acc;
      }, {});

  const payload = { dependencies: normalize(packageJson.dependencies ?? {}) };

  const json = JSON.stringify(payload);

  return createHash('sha512').update(json).digest('hex').substring(0, 32);
};
