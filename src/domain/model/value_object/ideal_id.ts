export class IdealId {
  idealId: number;
  constructor(idealId: number) {
    if (!idealId) throw new Error("IdealIdが存在しません");
    if (isNaN(idealId)) throw new Error("DearestIdはnumber型でなければなりません");
    this.idealId = idealId;
  }

  toNumber(): number {
    return this.idealId;
  }
}
