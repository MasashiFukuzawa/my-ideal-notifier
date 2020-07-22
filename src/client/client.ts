import { IdealApplicationServiceInterface } from '../interface/ideal/ideal_application_service_interface';

export class Client {
  constructor(
    private idealApplicationService: IdealApplicationServiceInterface
  ) {}

  postMessage(): void {
    const items = this.idealApplicationService.getAll();
    UrlFetchApp.fetch(LineConstants.PUSH_URL, this.setOptions(items));
  }

  setOptions(items: string[][]): object {
    const postData = this.setPostData(items);
    const options = {
      "method": "post",
      "headers": LineConstants.HEADERS,
      "payload": JSON.stringify(postData)
    };
    return options;
  }

  setPostData(items: string[][]): object {
    const postData = {
      "to": LineConstants.USER_ID,
      "messages": [{
        "type": "template",
        "altText": "Today's mission statement",
        "template": {
          "type": "confirm",
          "text": this.setText(items),
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
    return postData;
  }

  setText(items: string[][]): string {
    const randomNumber = Math.floor(Math.random() * items.length);
    return items.map(i => i[0])[randomNumber];
  }
}
