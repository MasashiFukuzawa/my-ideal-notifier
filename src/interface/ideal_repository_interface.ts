interface IdealRepositoryInterface {
  getAll(): string[][];
  find(idealId: IdealId): Ideal;
  findByItem(idealItem: IdealItem): Ideal;
  create(idealItem: IdealItem): void;
  delete(idealId: IdealId): void;
}
