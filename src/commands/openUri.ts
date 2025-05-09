import {
  commands,
  window,
  ViewColumn
} from 'vscode';

function isValidUri(str: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?' +
    '((([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}|' +
    '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))' +
    ')(:\\d+)?(\\/[-a-zA-Z0-9@:%._\\+~#?&//=]*)?$', 'i');

  return pattern.test(str);
}

const openUri = commands.registerCommand('extension.openUri', () => {
  window.showInputBox({
    placeHolder: '请输入 Url'
  }).then((res: string | undefined) => {
    if (res && isValidUri(res)) {
      const panel = window.createWebviewPanel('', res, ViewColumn.One, {
        enableScripts: true, // 启用 JS，默认禁用
        retainContextWhenHidden: true // webview 被隐藏时保持状态，避免被重置
      });

      panel.webview.html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Element UI</title>
          </head>
          <body>
            <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%; background: #fff;" src="${res}"></iframe>
          </body>
          </html>`;
    } else {
      window.showErrorMessage('输入的 url 地址不正确');
    }
  });
});

export default openUri;
