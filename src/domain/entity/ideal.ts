class Ideal {
  idealId: IdealId;
  idealItem: IdealItem;

  constructor(item: string) {
    if (item === null) {
      console.log("IdealItemが存在しません。");
      return;
    }
    this.idealId = new IdealId(setId()); // TODO: idの付与（どこに書くべき？）
    this.idealItem = new IdealItem(item);
  }

  getId(): IdealId {
    return this.idealId;
  }

  getItem(): IdealItem {
    return this.idealItem;
  }
}
