export class IdealPushFlag {
  idealPushFlag: number;
  constructor(pushFlag: number) {
    if (isNaN(pushFlag)) throw new Error("DearestPushFlagはnumber型でなければなりません");
    this.idealPushFlag = pushFlag;
  }

  toNumber(): number {
    return this.idealPushFlag;
  }
}
