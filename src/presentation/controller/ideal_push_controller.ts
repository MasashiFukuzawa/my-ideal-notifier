import { IdealPushApplicationInterface } from "../ideal_push_application_interface";

export class IdealPushController {
  constructor(private readonly idealPushInteractor: IdealPushApplicationInterface) {}

  pushMessage(): void {
    this.idealPushInteractor.handle();
  }
}
