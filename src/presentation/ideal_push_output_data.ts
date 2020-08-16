import { Ideal } from "../domain/ideal";

export class IdealPushOutputData {
  getMessage(nextItem: Ideal): string {
    return nextItem.getItem().toString();
  }
}
