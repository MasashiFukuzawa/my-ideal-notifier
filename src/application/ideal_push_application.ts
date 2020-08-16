import { Ideal } from '../domain/ideal';
import { IdealPushApplicationInterface } from '../presentation/ideal_push_application_interface';
import { IdealRepositoryInterface } from '../domain/ideal_repository_interface';
import { IdealPushPresentationInterface } from './ideal_push_presentation_interface';
import { IdealPushOutputData } from '../presentation/ideal_push_output_data';

export class IdealPushApplication implements IdealPushApplicationInterface {
  constructor(
    private readonly idealRepository: IdealRepositoryInterface,
    private readonly idealViewModel: IdealPushPresentationInterface
  ) {}

  handle(): void {
    const initIdeal = new Ideal(this.idealRepository);
    const ideal = initIdeal.getTargetIdeal();
    const outputData = new IdealPushOutputData();
    const message = outputData.getMessage(ideal);
    this.idealViewModel.pushMessage(message);
    ideal.renewPushFlag();
  }
}
