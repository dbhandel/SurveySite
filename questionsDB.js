//return desired question from mongo questions collection
var   databaseUrl = "SurveySite"
    , collections = ["questions", "users"]
    , db = require("mongojs").connect(databaseUrl, collections);

exports.getQ = function(desiredQ, returnQ ) {
    db.questions.find({}, function (err, questions) {
        if (err || !questions) {
            console.log(err);
        }
        else {
            //code to return desired question as a js object
            returnQ(err, questions[desiredQ]);
        }
    })
}

exports.getCount = function(err, returnCount) {
    db.questions.count(err, function(err, count){
        if (err) {
            console.log(err);
        }
        else {
            //code to return number of questions
            returnCount(err, count);
        }
    })
}



//abstracts the array of questions from the routes to
//simulate them being in a DB
/*
exports.questions = [
    {q: 'What color is the sky?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What color is an orange?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What color is the most popular rose?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'Which is the biggest planet?', a1: 'Earth', a2: 'Venus', a3: 'Pluto', a4: 'Saturn'},
    {q: 'What color is grass?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What is not stinky?', a1: 'vomit', a2: 'roses', a3: 'feces', a4: 'skunks'},
    {q: 'What is the smallest amount of money?', a1: 'a nickel', a2: 'a dollar',a3: 'a penny', a4: 'a quarter'},
    {q: 'What color your fav reality show?', a1: 'American Idol',a2: 'So You Think You Can Dance', a3: 'Lost', a4: 'I hate all reality shows'}
];*/
