import { IdealPushApplicationInterface } from '../presentation/ideal_push_application_interface';
import { IdealRepositoryInterface } from './ideal_repository_interface';
import { IdealPushPresentationInterface } from './ideal_push_presentation_interface';
import { IdealPushOutputData } from '../presentation/ideal_push_output_data';
import { Ideal } from '../domain/ideal';

export class IdealPushApplication implements IdealPushApplicationInterface {
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
    this.renewNextPushFlag(nextItem);
  }

  private renewNextPushFlag(nextItem: Ideal): void {
    const currentIdealId = nextItem.getId().toNumber();
    this.idealRepository.update(currentIdealId, 0);
    if (currentIdealId === this.idealRepository.count()) {
      this.idealRepository.update(1, 1);
    } else {
      this.idealRepository.update(currentIdealId + 1, 1);
    }
  }
}
