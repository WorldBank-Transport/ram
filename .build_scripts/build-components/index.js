var map = require('./map');
var header = require('./header');
var md = require('markdown-it')();

module.exports = function (pseudoLex, yfm, top, bottom) {
  // need to return the html equiv of the obj in list, but do
  let pageHTML = pseudoLex.map((lexList) => {
    let htmlChunk;
    if (lexList[0].match('map')) {
      htmlChunk = map(lexList);
    } else {
      htmlChunk = lexList.map((lex) => {
        let html;
        if (lex !== '') {
          html = md.render(lex);
        }
        return html;
      });
      htmlChunk = htmlChunk.filter((html) => {
        if (html) {
          return html;
        }
      });
    }
    return htmlChunk.join('');
  });
  // add in javascript that is dependent on on yfm but not the content of the md
  pageHTML = pageHTML.join('');
  pageHTML = header(yfm) + pageHTML;
  return pageHTML;
};
