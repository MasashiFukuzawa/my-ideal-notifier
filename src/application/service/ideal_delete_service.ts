class IdealDeleteService implements IdealDeleteServiceInterface {
  constructor(private readonly _idealRepository: IdealRepositoryInterface) {}

  handle(command: IdealDeleteCommand): void {
    const targetId: IdealId = new IdealId(command.getId());
    const ideal: Ideal = this._idealRepository.find(targetId);

    if (ideal == null) {
      return;
    }

    this._idealRepository.delete(targetId);
  }
}
