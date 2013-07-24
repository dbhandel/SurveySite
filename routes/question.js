/*

var questionsCursor = db.questions.find();
var questionDocument = questionsCursor.hasNext() ? questionsCursor.next() : null;
var action = "";
var nextQ = 0;
exports.question = function(req, res){
    //treats the last question differently
    // //in prep to show "thanks" page
    if (questionDocument){
        action = '/thanks';
    }
    else {
        action = '/thanks';
    }
    res.render('survey', {question: questions[req.params.questionID], action: action});

}
*/



var questions = require('../questionsDB.js').questions;

//GET next question page
exports.question = function(req, res){
    //not the "/" page

    //treats the last question differently
    // //in prep to show "thanks" page
    if (req.params.questionID < questions.length - 1){
        //builds and PRE-increments the action attr of the form
        var action = '/' + ++req.params.questionID;
    }
    else {
        action = '/thanks';
    }
    res.render('survey', {question: questions[req.params.questionID], action: action});

};
