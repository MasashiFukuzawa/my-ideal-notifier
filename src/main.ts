declare var ideal: glFunctions.ClientInterface;

function postMessages(): void {
  const items = ideal.getAll();
  UrlFetchApp.fetch(LineConstants.PUSH_URL, setOptions(items));
}

function setOptions(items: string[][]): object {
  const postData = setPostData(items);
  const options = {
    "method": "post",
    "headers": LineConstants.HEADERS,
    "payload": JSON.stringify(postData)
  };
  return options;
}

function setPostData(items: string[][]): object {
  const postData = {
    "to": LineConstants.USER_ID,
    "messages": [{
      "type": "template",
      "altText": "Today's mission statement",
      "template": {
        "type": "confirm",
        "text": setText(items),
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

function setText(items: string[][]): string {
  const randomNumber = Math.floor(Math.random() * items.length);
  return items.map(i => i[0])[randomNumber];
}
