import { IdealRepository } from '../infrastructure/ideal_repository';
import { IdealPushApplication } from '../application/ideal_push_application';
import { IdealPushController } from '../presentation/controller/ideal_push_controller';
import { IdealPushViewModel } from '../presentation/view_model/ideal_push_view_model';

function pushMessage(): void {
  const idealRepository = new IdealRepository();
  const idealPushViewModel = new IdealPushViewModel();
  const idealPushApplication = new IdealPushApplication(idealRepository, idealPushViewModel);
  const idealPushController = new IdealPushController(idealPushApplication);
  idealPushController.pushMessage();
};
