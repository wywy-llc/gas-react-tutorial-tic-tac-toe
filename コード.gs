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
