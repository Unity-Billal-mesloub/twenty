import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { isDefined } from 'twenty-shared/utils';

import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { ServerlessFunctionLayerEntity } from 'src/engine/metadata-modules/serverless-function-layer/serverless-function-layer.entity';
import { getLastCommonLayerDependencies } from 'src/engine/core-modules/serverless/drivers/utils/get-last-common-layer-dependencies';
import { serverlessFunctionCreateHash } from 'src/engine/metadata-modules/serverless-function/utils/serverless-function-create-hash.utils';
import { PackageJson } from 'src/engine/core-modules/application/types/application.types';

@Injectable()
export class ServerlessFunctionLayerService {
  constructor(
    @InjectRepository(ServerlessFunctionLayerEntity)
    private readonly serverlessFunctionLayerRepository: Repository<ServerlessFunctionLayerEntity>,
  ) {}

  async create(packageJson: PackageJson, workspaceId: string) {
    const checksum = serverlessFunctionCreateHash(packageJson);

    const serverlessFunctionLayer =
      this.serverlessFunctionLayerRepository.create({
        packageJson,
        checksum,
        workspaceId,
      });

    return this.serverlessFunctionLayerRepository.save(serverlessFunctionLayer);
  }

  async update(
    id: string,
    data: QueryDeepPartialEntity<ServerlessFunctionLayerEntity>,
  ) {
    const checksum = data.packageJson
      ? serverlessFunctionCreateHash(data.packageJson as PackageJson)
      : undefined;

    const updateData = { ...data, ...(checksum && { checksum }) };

    return this.serverlessFunctionLayerRepository.update(id, updateData);
  }

  async createCommonLayerIfNotExist(workspaceId: string) {
    const packageJson = await getLastCommonLayerDependencies();
    const checksum = serverlessFunctionCreateHash(packageJson);
    const commonLayer = await this.serverlessFunctionLayerRepository.findOne({
      where: {
        checksum,
        workspaceId,
      },
    });

    if (isDefined(commonLayer)) {
      return commonLayer;
    }

    return this.create(packageJson, workspaceId);
  }
}
