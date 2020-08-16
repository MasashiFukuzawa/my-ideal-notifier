import { Ideal } from "../domain/ideal";

export interface IdealRepositoryInterface {
  getAll(): readonly Ideal[];
  count(): number;
  update(id: number, nextPushFlag: number): boolean;
}
