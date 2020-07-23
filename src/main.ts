import { IdealRepository } from './repository/ideal_repository';
import { IdealApplicationService } from './application/service/ideal_application_service';
import { Client } from './client/client';

function main(): void {
  const idealRepository = new IdealRepository();
  const idealApplicationService = new IdealApplicationService(idealRepository);
  const client = new Client(idealApplicationService);
  client.postMessage();
};
