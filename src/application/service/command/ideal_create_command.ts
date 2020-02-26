class IdealCreateCommand {
  item: string;
  constructor(item: string) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }
}
