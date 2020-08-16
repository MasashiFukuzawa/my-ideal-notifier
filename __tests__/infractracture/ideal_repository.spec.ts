import { IdealRepository } from "../../src/infrastructure/ideal_repository";
import { Ideal } from "../../src/domain/model/ideal";

describe('IdealRepository', () => {
  SpreadsheetApp.openById = jest.fn(() => ({
    getSheetByName: jest.fn(() => ({
      getLastRow: jest.fn(() => 3),
      getLastColumn: jest.fn(() => 3),
      getRange: jest.fn(() => ({
        getValues: jest.fn(() => [
          [1, 'mission statement 1', 0],
          [2, 'mission statement 2', 1],
          [3, 'mission statement 3', 0],
        ]),
        setValues: jest.fn(),
      })),
    })),
  })) as any;

  PropertiesService.getScriptProperties = jest.fn(() => ({
    getProperty: jest.fn(() => 'SPREAD_SHEET_ID'),
  })) as any;

  describe('#getAll', () => {
    it('returns all data in ideals table', () => {
      const idealRepository = new IdealRepository();
      const data = idealRepository.getAll();
      expect(data).toStrictEqual([
        new Ideal(1, 'mission statement 1', 0),
        new Ideal(2, 'mission statement 2', 1),
        new Ideal(3, 'mission statement 3', 0),
      ]);
    });
  });
});
