import { IdealRepositoryInterface } from '../domain/application/ideal_repository_interface';
import { Ideal } from '../domain/model/ideal';

export class IdealRepository implements IdealRepositoryInterface {
  getAll(): readonly Ideal[] {
    const spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const sheet = spreadsheet.getSheetByName("mission_statements");
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    const rawData = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
    const fullData = rawData.filter(e => !!e);
    return this.map(fullData);
  }

  private map(fullData: any[][]): Ideal[] {
    return fullData.map(e => {
      return new Ideal(e[0], e[1], e[2]);
    });
  }
}
