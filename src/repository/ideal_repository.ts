import { IdealRepositoryInterface } from '../interface/ideal/ideal_repository_interface';
import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

export class IdealRepository implements IdealRepositoryInterface {
  getAll(): string[][] {
    const ss: Spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const ws: Sheet = ss.getSheetByName("mission_statements");
    const lastRow: number = ws.getLastRow();
    const allItems: string[][] = ws.getRange(2, 1, lastRow - 1, 1).getValues();
    return allItems;
  }
}
