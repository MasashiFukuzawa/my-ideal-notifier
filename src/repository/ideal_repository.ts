class IdealRepository implements IdealRepositoryInterface {
  find(id: number): Ideal {
    return Ideal;
  }
  save(item: string): void {}
  update(id: number, item: string): void {}
  delete(id: number): void {}
}
