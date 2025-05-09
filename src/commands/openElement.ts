import {
  commands,
  window,
  ViewColumn
} from 'vscode';

import {
  elementUiList
} from '../components/index';
import {
  IQuickPickItem
} from '../types';

const openElement = commands.registerCommand('extension.openElement', () => {
  if (!window.activeTextEditor || !['vue', 'html'].includes(window.activeTextEditor.document.languageId)) {
    return;
  }

  window.showQuickPick(elementUiList.map(item => ({
    label: item.path,
    detail: item.title,
    path: item.path
  })), {
    title: '选择组件后自动打开', // 标题
    placeHolder: '请输入组件名称', // 占位符文本
    canPickMany: false // 是否可以多选
  }).then((res: IQuickPickItem | undefined) => {
    if (res) {
      const panel = window.createWebviewPanel('', '组件 | Element', ViewColumn.One, {
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
            <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%; background: #fff;" src="${`https://element.eleme.cn/#/zh-CN/component/${res.path || 'installation'}`}"></iframe>
          </body>
          </html>`;
    }
  });
});

export default openElement;
