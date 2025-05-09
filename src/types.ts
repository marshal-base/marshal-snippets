import {
  QuickPickItem
} from 'vscode';

export interface IElementUiComponent {
  title: string;
  path: string;
}

export interface IQuickPickItem extends QuickPickItem {
  path: string;
}
