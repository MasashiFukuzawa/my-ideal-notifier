declare var ideal: glFunctions.ClientInterface;

function postMessages(): void {
  const PUSH_URL: string = "https://api.line.me/v2/bot/message/push";
  const items: string[][] = ideal.getAll();
  const pushData: string[][] = setPushData(items);
  const options = setOptions(pushData);
  UrlFetchApp.fetch(PUSH_URL, options);
}

function setPushData(items: string[][]): string[][] {
  return;
}

function setOptions(data: string[][]): any {}

function doPost(e): void {
  const REPLY_URL: string = "https://api.line.me/v2/bot/message/reply";
  const json: any = JSON.parse(e.postData.contents);
  const events: any = json.events;

  const recordSheet = Spreadsheet.setTargetSheet("records");

  for (let i = 0; i < events.length; i++) {
    if (events[i].type === "postback") {
      _doPostbackAction(events[i], recordSheet);
    } else if (events[i].type === "message") {
      _doMessageAction(events[i], recordSheet);
    }
  }
}
