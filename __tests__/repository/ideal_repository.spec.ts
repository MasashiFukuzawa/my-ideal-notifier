import { IdealRepository } from "../../src/repository/ideal_repository";

describe('IdealRepository', () => {
  SpreadsheetApp.openById = jest.fn(() => ({
    getSheetByName: jest.fn(() => ({
      getLastRow: jest.fn(() => 4),
      getRange: jest.fn(() => ({
        getValues: jest.fn(() => [
          ['mission statement 1'],
          ['mission statement 2'],
          ['mission statement 3'],
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
        ['mission statement 1'],
        ['mission statement 2'],
        ['mission statement 3'],
      ]);
    });
  });
});
