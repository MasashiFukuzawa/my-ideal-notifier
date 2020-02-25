class IdealRegisterService implements IdealRegisterServiceInterface {
  constructor(
    private readonly _idealRepository: IdealRepositoryInterface,
    private readonly _itemService: ItemService
  ) {}

  handle(command: IdealRegisterCommand): void {
    const targetItem: IdealItem = new IdealItem(command.getItem());

    if (this._itemService.exists(targetItem)) {
      console.log("ユーザーは既に存在しています。");
      return;
    }

    this._idealRepository.save(targetItem);
  }
}
