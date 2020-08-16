import { IdealRepository } from "../../../src/infrastructure/ideal_repository";
import { IdealPushViewModel } from "../../../src/presentation/view_model/ideal_push_view_model";
import { IdealPushInteractor } from "../../../src/domain/application/ideal_push_interactor";
import { Ideal } from "../../../src/domain/model/ideal";

describe('IdealPushInteractor', () => {
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
    getProperty: jest.fn(() => 'xxxxxxx'),
  })) as any;

  UrlFetchApp.fetch = jest.fn();

  describe('handle', () => {
    jest.spyOn(IdealRepository.prototype, 'getAll')
      .mockReturnValue([
        new Ideal(1, 'mission statement 1', 0),
        new Ideal(2, 'mission statement 2', 1),
        new Ideal(3, 'mission statement 3', 0),
      ]);

    it('pushes messages successfully', () => {
      const idealRepository = new IdealRepository();
      const idealPushViewModel = new IdealPushViewModel();
      const idealPushInteractor = new IdealPushInteractor(idealRepository, idealPushViewModel);
      idealPushInteractor.handle();
      expect(UrlFetchApp.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
