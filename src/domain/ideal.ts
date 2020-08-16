import { IdealRepositoryInterface } from "../domain/ideal_repository_interface";
import { IdealId } from "./value_object/ideal_id";
import { IdealItem } from "./value_object/ideal_item";
import { IdealPushFlag } from "./value_object/ideal_push_flag";

export class Ideal {
  private readonly idealRepository: IdealRepositoryInterface;
  private readonly id: IdealId;
  private readonly item: IdealItem;
  private readonly pushFlag: IdealPushFlag;
  constructor(idealRepository: IdealRepositoryInterface, id?: number, item?: string, pushFlag?: number) {
    this.idealRepository = idealRepository;
    if (!!id) this.id = new IdealId(id);
    if (!!item) this.item = new IdealItem(item);
    if (!!pushFlag) this.pushFlag = new IdealPushFlag(pushFlag);
  }

  getTargetIdeal(): Ideal {
    const fullData = this.idealRepository.getAll();
    const mappedFullData = this.map(fullData);
    return mappedFullData.filter(e => e.hasPushFlag())[0];
  }

  renewPushFlag(): void {
    const currentIdealId = this.getId().toNumber();
    this.idealRepository.update(currentIdealId, 0);

    const nextIdealId = this.getNextIdealId(currentIdealId);
    this.idealRepository.update(nextIdealId, 1);
  }

  getId(): IdealId {
    return this.id;
  }

  getItem(): IdealItem {
    return this.item;
  }

  getPushFlag(): IdealPushFlag {
    return this.pushFlag;
  }

  private map(fullData: readonly any[][]): Ideal[] {
    return fullData.map(e => {
      return new Ideal(this.idealRepository, e[0], e[1], e[2]);
    });
  }

  private hasPushFlag(): boolean {
    return !!this.getPushFlag() && this.getPushFlag().toNumber() === 1;
  }

  private getNextIdealId(currentIdealId: number): number {
    if (this.isLastIdeal(currentIdealId)) {
      return 1;
    } else {
      return currentIdealId + 1;
    }
  }

  private isLastIdeal(currentIdealId: number): boolean {
    return currentIdealId === this.idealRepository.count();
  }
}
