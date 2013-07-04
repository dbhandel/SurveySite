
/*
 * GET home page.
 */
//console.log(questions[0].q);
exports.index = function(req, res){
  res.render('index', { title: "Welcome to David's Awesome Survey Site!"});
};

