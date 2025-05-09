import {
  languages,
  TextDocument,
  window,
  Disposable
} from 'vscode';

function sqCompletionItemProvider(): Disposable {
  return languages.registerCompletionItemProvider(['vue', 'javascript', 'typescript', 'html', 'wxml'], {
    provideCompletionItems(document: TextDocument) {
      window.showWarningMessage(document.getText());

      return [];
    }
  }, '', ':', '<', '"', "'", '/', '@', '(', '>', '{');
}

export default sqCompletionItemProvider;
