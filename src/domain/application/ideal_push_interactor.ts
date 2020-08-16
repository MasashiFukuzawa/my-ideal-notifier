import { IdealPushApplicationInterface } from '../../presentation/controller/ideal_push_application_interface';
import { IdealRepositoryInterface } from '../model/ideal_repository_interface';

export class IdealPushInteractor implements IdealPushApplicationInterface {
  constructor(
    private readonly idealRepository: IdealRepositoryInterface,
  ) {}

  getAll(): string[][] {
    return this.idealRepository.getAll();
  }
}
