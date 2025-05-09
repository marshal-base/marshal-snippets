import {
  TextDocument,
  Position,
  Range
} from 'vscode';

const isCloseTag = (document: TextDocument, position: Position): boolean => {
  const txt = document.getText(new Range(new Position(position.line, 0), position)).trim();

  if (!txt.endsWith('>') || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith('/>')) {
    return false;
  }

  const txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);

  if (Array.isArray(txtArr) && txtArr.length > 0) {
    const txtStr = txtArr[txtArr.length - 1];

    return /<([\w-]+)(\s*|(\s+[\w-_:@.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
  }

  return false;
};

export default {
  isCloseTag
};
