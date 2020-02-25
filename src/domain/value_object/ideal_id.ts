class IdealId {
  id: string;
  constructor(id: string) {
    if (id === null) {
      console.log("IdealIdが存在しません。");
      return;
    }
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}
