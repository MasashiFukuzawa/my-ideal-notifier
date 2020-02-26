interface IdealApplicationServiceInterface {
  getAll(): string[][];
  create(command: IdealCreateCommand): void;
  delete(command: IdealDeleteCommand): void;
}
