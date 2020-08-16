import { IdealId } from "./value_object/ideal_id";
import { IdealItem } from "./value_object/ideal_item";
import { IdealNextPushFlag } from "./value_object/ideal_next_push_flag";

export class Ideal {
  private readonly id: IdealId;
  private readonly item: IdealItem;
  private readonly nextPushFlag: IdealNextPushFlag;
  constructor(id: number, item: string, nextPushFlag: number) {
    this.id = new IdealId(id);
    this.item = new IdealItem(item);
    this.nextPushFlag = new IdealNextPushFlag(nextPushFlag);
  }

  getId(): IdealId {
    return this.id;
  }

  getItem(): IdealItem {
    return this.item;
  }

  getNextPushFlag(): IdealNextPushFlag {
    return this.nextPushFlag;
  }

  isNextPushItem(): boolean {
    return this.getNextPushFlag().toNumber() === 1;
  }
}
