import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

class IdealRepository implements IdealRepositoryInterface {
  itemService: ItemService;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  find(idealId: IdealId): Ideal {
    const ss: Spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const ws: Sheet = ss.getSheetByName("ideals");
    const lastRow: number = ws.getLastRow();
    const allItems: string[][] = ws.getRange(2, 1, lastRow - 1, 2).getValues();

    for (let i = 0; i < allItems.length; i++) {
      let id: string = allItems[i][0];
      if (id === idealId.getId()) {
        const item: string = allItems[i][1];
        return new Ideal(item);
      }
    }
    return null;
  }

  findByItem(idealItem: IdealItem): Ideal {
    const ss: Spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const ws: Sheet = ss.getSheetByName("ideals");
    const lastRow: number = ws.getLastRow();
    const allItems: string[][] = ws.getRange(2, 1, lastRow - 1, 2).getValues();

    for (let i = 0; i < allItems.length; i++) {
      let item: string = allItems[i][1];
      if (item === idealItem.getItem()) {
        return new Ideal(item);
      }
    }
    return null;
  }

  save(idealItem: IdealItem): void {
    if (this.itemService.exists(idealItem)) {
      console.log("このitemは既に存在しています。");
      return;
    }

    const ss: Spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const ws: Sheet = ss.getSheetByName("ideals");
    const lastRow: number = ws.getLastRow();
    const id: string = setId(); // TODO: idの付与（どこに書くべき？）
    const item: string = idealItem.getItem();

    ws.getRange(lastRow + 1, 1, 1, 2).setValues([[id, item]]);
  }

  delete(idealId: IdealId): void {
    const ss: Spreadsheet = SpreadsheetApp.openById(
      PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );
    const ws: Sheet = ss.getSheetByName("ideals");
    const lastRow: number = ws.getLastRow();
    const allItems: string[][] = ws.getRange(2, 1, lastRow - 1, 2).getValues();

    for (let i = 0; i < allItems.length; i++) {
      let id: string = allItems[i][0];
      if (id === idealId.getId()) {
        ws.getRange(i + 2, 1, 1, 2).clearContent();
      }
    }
  }
}
