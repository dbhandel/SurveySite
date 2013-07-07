var questions = require('../questionsDB.js').questions;

//GET next question page
exports.question = function(req, res){
    //not the "/" page
    if (req.params.questionID) {
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
    }
    else {
        res.render('index', {question: questions[0]});
    }
};