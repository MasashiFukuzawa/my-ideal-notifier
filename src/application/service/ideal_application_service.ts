import { IdealApplicationServiceInterface } from '../../interface/ideal/ideal_application_service_interface';
import { IdealRepositoryInterface } from '../../interface/ideal/ideal_repository_interface';

export class IdealApplicationService implements IdealApplicationServiceInterface {
  constructor(
    private readonly idealRepository: IdealRepositoryInterface,
  ) {}

  getAll(): string[][] {
    return this.idealRepository.getAll();
  }
}
