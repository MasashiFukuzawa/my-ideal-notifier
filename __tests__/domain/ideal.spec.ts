import { Ideal } from "../../src/domain/ideal";
import { IdealRepository } from "../../src/infrastructure/ideal_repository";

describe('Ideal', () => {
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
        setValue: jest.fn(),
      })),
    })),
  })) as any;

  PropertiesService.getScriptProperties = jest.fn(() => ({
    getProperty: jest.fn(() => 'xxxxxxx'),
  })) as any;

  const idealRepository = new IdealRepository();

  describe('getIdealToPush', () => {
    jest.spyOn(IdealRepository.prototype, 'getAll')
      .mockReturnValue([
        [1, 'mission statement 1', 0],
        [2, 'mission statement 2', 1],
        [3, 'mission statement 3', 0],
      ]);

    it('returns target ideal with push flag', () => {
      const targetIdeal = Ideal.getIdealToPush(idealRepository);
      expect(targetIdeal).toStrictEqual(new Ideal(2, 'mission statement 2', 1, idealRepository));
    });
  });

  describe('renewPushFlag', () => {
    it('calls update method twice', () => {
      const ideal = new Ideal(2, 'mission statement 2', 1, idealRepository);
      const updateSpy = jest.spyOn(IdealRepository.prototype, 'update').mockReturnValue(true);
      ideal.renewPushFlag();
      expect(updateSpy).toHaveBeenCalledTimes(2);
    });
  });
});
