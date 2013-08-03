
/*
 * GET home page.
 */
<<<<<<< Updated upstream
//console.log(questions[0].q);
var questions = require('../questionsDB.js').questions;

exports.index = function(req, res){
    res.render('index', {question: questions[0], action: '/1'});
};

=======

exports.index = function(req, res){

    var displayQ = require('../collections.js').getQ(0);
    console.log(displayQ);
    res.render('index', {question: displayQ, action: '/1'});
};
>>>>>>> Stashed changes
