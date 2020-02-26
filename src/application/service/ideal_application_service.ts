class IdealApplicationService implements IdealApplicationServiceInterface {
  constructor(
    private readonly _idealRepository: IdealRepositoryInterface,
    private readonly _itemService: ItemService
  ) {}

  getAll(): string[][] {
    return this._idealRepository.getAll();
  }

  create(command: IdealCreateCommand): void {
    const idealItem: IdealItem = new IdealItem(command.getItem());
    if (this._itemService.exists(idealItem)) {
      console.log("このitemは既に存在しています。");
      return;
    }
    this._idealRepository.create(idealItem);
  }

  delete(command: IdealDeleteCommand): void {
    const targetId: IdealId = new IdealId(command.getId());
    const found = this._idealRepository.find(targetId);
    if (found == null) {
      return;
    }
    this._idealRepository.delete(targetId);
  }
}
