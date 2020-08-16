import { Ideal } from "../domain/ideal";

export class IdealPushOutputData {
  getMessage(nextIdeal: Ideal): string {
    return nextIdeal.getItem().toString();
  }
}
