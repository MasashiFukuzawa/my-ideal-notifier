import { IdealRepositoryInterface } from "../domain/ideal_repository_interface";
import { IdealId } from "./value_object/ideal_id";
import { IdealItem } from "./value_object/ideal_item";
import { IdealPushFlag } from "./value_object/ideal_push_flag";

export class Ideal {
  private readonly id: IdealId;
  private readonly item: IdealItem;
  private readonly pushFlag: IdealPushFlag;
  private readonly idealRepository: IdealRepositoryInterface;
  constructor(id: number, item: string, pushFlag: number, idealRepository?: IdealRepositoryInterface) {
    this.id = new IdealId(id);
    this.item = new IdealItem(item);
    this.pushFlag = new IdealPushFlag(pushFlag);
    if (!!idealRepository) this.idealRepository = idealRepository;
  }

  static getIdealToPush(idealRepository: IdealRepositoryInterface): Ideal {
    const fullData = idealRepository.getAll();
    const mappedFullData = this.map(fullData, idealRepository);
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

  private static map(fullData: readonly any[][], idealRepository: IdealRepositoryInterface): Ideal[] {
    return fullData.map(e => {
      return new Ideal(e[0], e[1], e[2], idealRepository);
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
