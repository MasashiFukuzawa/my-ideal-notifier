import { Authorization } from "./authorization";

export class IdealView {
  PUSH_URL = "https://api.line.me/v2/bot/message/push";

  pushMessage(message: string): void {
    const auth = new Authorization();
    const data = this.getPushData(message, auth.getUserId());
    UrlFetchApp.fetch(this.PUSH_URL, this.setOptions(data, auth.getHeaders()));
  }

  private setOptions(data: object, headers: object): object {
    return {
      "method": "post",
      "headers": headers,
      "payload": JSON.stringify(data)
    };
  }

  private getPushData(message: string, userId: string): object {
    return {
      "to": userId,
      "messages": [{
        "type": "template",
        "altText": "Today's mission statement",
        "template": {
          "type": "confirm",
          "text": message,
          "actions": [
            {
                "type": "message",
                "label": "OK",
                "text": "Have a good day!"
            },
            {
                "type": "message",
                "label": "No thanks",
                "text": "See you again!"
            }
          ],
        },
      }]
    };
  }
}
