export class IdealItem {
  item: string;
  constructor(item: string) {
    if (!item) throw new Error("IdealItemが存在しません");
    if (typeof item !== 'string') throw new Error("IdealItemはstring型でなければなりません");
    this.item = item;
  }

  toString(): string {
    return this.item;
  }
}
