interface IdealRepositoryInterface {
  find(id: number): Ideal;
  save(item: string): void;
  update(id: number, item: string): void;
  delete(id: number): void;
}
