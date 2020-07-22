import { IdealRepository } from './repository/ideal_repository';
import { IdealApplicationService } from './application/service/ideal_application_service';
import { Client } from './client/client';

declare namespace glFunctions {
  interface global {
    main(): void;
  }
}

declare var global: glFunctions.global;

// 最終的にGAS側で `function main() {...}`という形に修正する必要あり
global.main = (): void => {
  const idealRepository = new IdealRepository();
  const idealApplicationService = new IdealApplicationService(idealRepository);
  const client = new Client(idealApplicationService);
  client.postMessage();
};
