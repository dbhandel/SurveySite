var questions = require('../questionsDB.js');

exports.index = function(req, res){

    console.log('inside index.js')
    questions.getQ(0, function(err, question) {
        if (err) {console.log('error');
        }
        else {
            var action = '/1';
            console.log("TEST");
            console.log('TEST2');
            res.render('index', {question: question, action: action});

        }
    });
}