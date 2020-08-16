import { IdealPushApplicationInterface } from '../../presentation/ideal_push_application_interface';
import { IdealRepositoryInterface } from './ideal_repository_interface';
import { IdealPushPresentationInterface } from './ideal_push_presentation_interface';
import { IdealPushOutputData } from '../../presentation/ideal_push_output_data';

export class IdealPushInteractor implements IdealPushApplicationInterface {
  constructor(
    private readonly idealRepository: IdealRepositoryInterface,
    private readonly idealViewModel: IdealPushPresentationInterface
  ) {}

  handle(): void {
    const fullData = this.idealRepository.getAll();
    const nextItem = fullData.filter(e => e.isNextPushItem())[0];
    const outputData = new IdealPushOutputData();
    const message = outputData.getMessage(nextItem);
    this.idealViewModel.pushMessage(message);
    // TODO: flagの付け替え
  }
}
