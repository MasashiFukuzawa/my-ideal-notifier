import { Ideal } from "../domain/ideal";

export interface IdealRepositoryInterface {
  getAll(): readonly any[][];
  count(): number;
  update(id: number, nextPushFlag: number): boolean;
}
