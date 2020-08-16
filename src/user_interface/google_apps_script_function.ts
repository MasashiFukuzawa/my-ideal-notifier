import { IdealRepository } from '../infrastructure/ideal_repository';
import { IdealPushInteractor } from '../domain/application/ideal_push_interactor';
import { IdealView } from '../presentation/view/ideal_view';

function postMessage(): void {
  const idealRepository = new IdealRepository();
  const idealApplicationService = new IdealPushInteractor(idealRepository);
  const idealView = new IdealView(idealApplicationService);
  idealView.postMessage();
};
