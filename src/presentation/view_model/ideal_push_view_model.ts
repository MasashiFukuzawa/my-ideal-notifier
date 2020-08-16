import { IdealPushPresentationInterface } from "../../application/ideal_push_presentation_interface";
import { IdealView } from "../view/ideal_view";

export class IdealPushViewModel implements IdealPushPresentationInterface {
  pushMessage(message: string): void {
    const idealView = new IdealView();
    idealView.pushMessage(message);
  }
}
