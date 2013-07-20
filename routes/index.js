
/*
 * GET home page.
 */
//console.log(questions[0].q);
var questions = require('../questionsDB.js').questions;

exports.index = function(req, res){
    res.render('index', {question: questions[0], action: '/1'});
};

