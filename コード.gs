/**
 * doGet関数
 */
function doGet() {
  const htmlTemplate = HtmlService.createTemplateFromFile('index');
  return htmlTemplate.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

function saveResult(xIsNext, squares) {
  const spreadsheet = SpreadsheetApp.openById('1feULIHy01BTazYoGDpsElKSADrPyI1uwm1iK-i9EiAU');
  const sheet = spreadsheet.getActiveSheet();
  const winner = xIsNext ? 'O' : 'X'
  let display = "";
  Logger.log(squares)
  for (let i = 0; i < squares.length; i++) {
    if(squares[i]){
      display += squares[i] + '　';
    } else{
      display += '　';
    }
    if ([2, 5].includes(i)) {
      display.trim();
      display += '\n';
    }
  }
  sheet.appendRow([winner, display, getNow()]);
}

/**
 * 現在時刻の文字列を取得します。
 * @return {string} 本日日付((YYYY-MM-DD hh:mm:dd)
 */
function getNow() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;;
}


function test() {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  saveResult('O', squares)
}