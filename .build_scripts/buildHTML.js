var fs = require('fs');
var yamlFront = require('yaml-front-matter');
var pageBuilder = require('./build-components/index.js');

// boilerplate html that includes code to get css and leaflet javascript files
var top = fs.readFileSync('./app/doc_components/top.html').toString();
var bottom = fs.readFileSync('./app/doc_components/bottom.html').toString();

// parse the md file and its yaml frontmatter
var mdText = fs.readFileSync('./app/report.md').toString();
var yfm = yamlFront.loadFront(mdText);
// get rid of the YAML front matter
mdText = mdText.replace(/---.?([\s\S]*?)---/, '');

// get list of 'pseudolexicals', a list representaiton of markdown not within map tags and markdown within those tags
var pseudoLex = mdText.split(/:::.?([\s\S]*?):::/g).map((lex) => {
  return lex.split('\n');
});
// parse markdown
var pageHTML = pageBuilder(pseudoLex, yfm);
// put markdown inside the header and footer
pageHTML = top + pageHTML + bottom;
// write out the html
fs.writeFile('./app/index.html', pageHTML, function (err) {
  if (err) {
    return console.log(err);
  }
});
