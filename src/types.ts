import { QuickPickItem } from 'vscode'

export interface IElementUIComponent {
  title: string
  path: string
}

export interface IQuickPickItem extends QuickPickItem {
  path: string
}
