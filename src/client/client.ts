class Client implements glFunctions.ClientInterface {
  constructor(
    private _idealApplicationService: IdealApplicationServiceInterface
  ) {}

  getAll(): string[][] {
    return this._idealApplicationService.getAll();
  }

  create(item: string): void {
    const command = new IdealCreateCommand(item);
    this._idealApplicationService.create(command);
  }

  delete(id: string): void {
    const command = new IdealDeleteCommand(id);
    this._idealApplicationService.delete(command);
  }
}
