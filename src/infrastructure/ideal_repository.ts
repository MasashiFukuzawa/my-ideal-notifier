import { IdealRepositoryInterface } from '../domain/ideal_repository_interface';
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

export class IdealRepository implements IdealRepositoryInterface {
  private readonly sheet: Sheet;
  private readonly lastRow: number;
  private readonly lastCol: number;
  private readonly fullData: readonly any[][];
  constructor() {
    this.sheet = this.getSheet();
    this.lastRow = this.getLastRow();
    this.lastCol = this.getLastColumn();
    this.fullData = this.getAll();
  }

  getAll(): readonly any[][] {
    if (this.fullData) return this.fullData;
    const rawData = this.sheet.getRange(2, 1, this.lastRow - 1, this.lastCol).getValues();
    return rawData.filter(e => !!e[0]);
  }

  count(): number {
    return this.fullData.length;
  }

  update(id: number, nextPushFlag: number): boolean {
    try {
      this.sheet.getRange(id + 1, 3).setValue(nextPushFlag);
      return true;
    } catch {
      return false;
    }
  }

  private getSheet(): Sheet {
    if (this.sheet) return this.sheet;
    const spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    return spreadsheet.getSheetByName("mission_statements");
  }

  private getLastRow(): number {
    if (this.lastRow) return this.lastRow;
    return this.sheet.getLastRow();
  }

  private getLastColumn(): number {
    if (this.lastCol) return this.lastCol;
    return this.sheet.getLastColumn();
  }
}
