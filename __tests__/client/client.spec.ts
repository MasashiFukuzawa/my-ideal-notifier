import { IdealRepository } from "../../src/repository/ideal_repository";
import { IdealApplicationService } from "../../src/application/service/ideal_application_service";
import { Client } from "../../src/client/client";

describe('Client', () => {
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
      const idealApplicationService = new IdealApplicationService(idealRepository);
      const client = new Client(idealApplicationService);
      client.postMessage();
      expect(UrlFetchApp.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
