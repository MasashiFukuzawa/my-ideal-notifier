class ItemService {
  constructor(private _idealRepository: IdealRepositoryInterface) {}

  exists(idealItem: IdealItem): boolean {
    let found = this._idealRepository.findByItem(idealItem);
    return !!found;
  }
}
