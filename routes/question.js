
var questions = require('../questionsDB.js');

//GET next question page
exports.question = function(req, res){
    //not the "/" page

    //treats the last question differently
    // //in prep to show "thanks" page
    console.log('inside question.js')
        questions.getQ(req.params.questionID, function(err, question) {
            if (err) {
                console.log('error');
            }
            else {
                var action = '/' + ++req.params.questionID;
                console.log("TEST");
                //console.log(questions.getCount(err, returnCount)
                
                //if req.params.questionID == db.questions.count() then go to /thanks
                //console.log(questions.getCount())
                //else render the next question

                    res.render('survey', {question: question, action: action});

            }
        });
};
