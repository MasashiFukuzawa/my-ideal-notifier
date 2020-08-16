import { IdealPushApplicationInterface } from "../ideal_push_application_interface";

export class IdealPushController {
  constructor(private readonly idealPushApplication: IdealPushApplicationInterface) {}

  pushMessage(): void {
    this.idealPushApplication.handle();
  }
}
