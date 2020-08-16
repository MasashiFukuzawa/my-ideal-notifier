import { IdealRepository } from "../../../src/infrastructure/ideal_repository";
import { IdealPushInteractor } from "../../../src/domain/application/ideal_push_interactor";
import { IdealView } from "../../../src/presentation/view/ideal_view";

describe('IdealPushInteractor', () => {
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
    getProperty: jest.fn(() => 'xxxxxxx'),
  })) as any;

  UrlFetchApp.fetch = jest.fn();

  describe('postMessage', () => {
    jest.spyOn(IdealRepository.prototype, 'getAll')
      .mockReturnValue([
        ['mission statement 1'],
        ['mission statement 2'],
        ['mission statement 3'],
      ]);

    it('pushes messages successfully', () => {
      const idealRepository = new IdealRepository();
      const idealApplicationService = new IdealPushInteractor(idealRepository);
      const idealView = new IdealView(idealApplicationService);
      idealView.postMessage();
      expect(UrlFetchApp.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
