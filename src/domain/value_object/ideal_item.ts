class IdealItem {
  item: string;
  constructor(item: string) {
    if (item === null) {
      console.log("IdealItemが存在しません。");
      return;
    }
    this.item = item;
  }

  getItem(): string {
    return this.item;
  }
}
