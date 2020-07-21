class Client implements glFunctions.ClientInterface {
  constructor(
    private _idealApplicationService: IdealApplicationServiceInterface
  ) {}

  getAll(): string[][] {
    return this._idealApplicationService.getAll();
  }
}
