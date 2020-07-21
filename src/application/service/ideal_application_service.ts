class IdealApplicationService implements IdealApplicationServiceInterface {
  constructor(
    private readonly _idealRepository: IdealRepositoryInterface,
  ) {}

  getAll(): string[][] {
    return this._idealRepository.getAll();
  }
}
