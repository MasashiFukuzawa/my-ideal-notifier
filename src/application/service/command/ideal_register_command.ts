class IdealRegisterCommand {
  item: string;
  constructor(item: string) {
    this.item = item;
  }

  getItem(): string {
    return this.item;
  }
}
