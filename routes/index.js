
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('views/index.html');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.sendfile('views/partials/' + name + '.html');
};