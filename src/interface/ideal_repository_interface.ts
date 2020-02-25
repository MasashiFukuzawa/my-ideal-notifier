interface IdealRepositoryInterface {
  find(idealId: IdealId): Ideal;
  findByItem(idealItem: IdealItem): Ideal;
  save(idealItem: IdealItem): void;
  delete(idealId: IdealId): void;
}
