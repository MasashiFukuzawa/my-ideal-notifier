export class IdealNextPushFlag {
  idealNextPushFlag: number;
  constructor(nextPushFlag: number) {
    if (isNaN(nextPushFlag)) throw new Error("DearestNextPushFlagはnumber型でなければなりません");
    this.idealNextPushFlag = nextPushFlag;
  }

  toNumber(): number {
    return this.idealNextPushFlag;
  }
}
