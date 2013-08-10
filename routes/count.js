//return the number of questions in the mongo questions collection
var   databaseUrl = "SurveySite"
    , collections = ["questions", "users"]
    , db = require("mongojs").connect(databaseUrl, collections);

exports.questionsCount = function(req, res) {
    db.questions.count({}, function (err, returnCount) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('ready to get the count'); //why doesn't this console.log appear???
            res.render('count', {num: returnCount});
        }
    })
}

