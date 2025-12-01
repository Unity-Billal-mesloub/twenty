import fs from 'fs/promises';
import { join } from 'path';

import { getLayerDependenciesDirName } from 'src/engine/core-modules/serverless/drivers/utils/get-layer-dependencies-dir-name';
import { LAST_LAYER_VERSION } from 'src/engine/core-modules/serverless/drivers/layers/last-layer-version';
import { type PackageJson } from 'src/engine/core-modules/application/types/application.types';

export const getLastCommonLayerDependencies = async (
  layerVersion = LAST_LAYER_VERSION,
): Promise<PackageJson> => {
  const lastVersionLayerDirName = getLayerDependenciesDirName(layerVersion);

  const packageJson = await fs.readFile(
    join(lastVersionLayerDirName, 'package.json'),
    'utf8',
  );

  return JSON.parse(packageJson);
};
