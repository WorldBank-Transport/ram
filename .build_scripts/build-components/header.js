//inserts title code
module.exports = function(yfm) {
  var title = yfm['title'];
  return '<script>document.getElementById("header-title").innerHTML="' + title + '";</script>';
};
