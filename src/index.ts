import {
  ExtensionContext
} from 'vscode';

import {
  openElement,
  openUri
} from './commands/index';
import myLanguages from './languages/index';

export function activate(context: ExtensionContext): void {
  context.subscriptions.push(myLanguages());
  context.subscriptions.push(openElement);
  context.subscriptions.push(openUri);
}
