import { Ideal } from "../model/ideal";

export interface IdealRepositoryInterface {
  getAll(): readonly Ideal[];
}
