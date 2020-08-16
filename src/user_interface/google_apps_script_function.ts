import { IdealRepository } from '../infrastructure/ideal_repository';
import { IdealPushInteractor } from '../domain/application/ideal_push_interactor';
import { IdealPushController } from '../presentation/controller/ideal_push_controller';
import { IdealPushViewModel } from '../presentation/view_model/ideal_push_view_model';

function pushMessage(): void {
  const idealRepository = new IdealRepository();
  const idealPushViewModel = new IdealPushViewModel();
  const idealPushInteractor = new IdealPushInteractor(idealRepository, idealPushViewModel);
  const idealPushController = new IdealPushController(idealPushInteractor);
  idealPushController.pushMessage();
};
