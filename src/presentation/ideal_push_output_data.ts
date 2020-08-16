import { Ideal } from "../domain/model/ideal";

export class IdealPushOutputData {
  getMessage(nextItem: Ideal): string {
    return nextItem.getItem().toString();
  }
}
