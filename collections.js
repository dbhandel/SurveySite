var databaseUrl = "SurveySite"
    , collections = ["questions", "users"]
    , db = require("mongojs").connect(databaseUrl, collections);


//Questions to be loaded in "questions collection"
var questionsArray = [
    {q: 'What color is the sky?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What color is an orange?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What color is the most popular rose?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'Which is the biggest planet?', a1: 'Earth', a2: 'Venus', a3: 'Pluto', a4: 'Saturn'},
    {q: 'What color is grass?', a1: 'red', a2: 'green', a3: 'blue', a4: 'orange'},
    {q: 'What is not stinky?', a1: 'vomit', a2: 'roses', a3: 'feces', a4: 'skunks'},
    {q: 'What is the smallest amount of money?', a1: 'a nickel', a2: 'a dollar',
        a3: 'a penny', a4: 'a quarter'},
    {q: 'What color your fav reality show?', a1: 'American Idol',
        a2: 'So You Think You Can Dance', a3: 'Lost', a4: 'I hate all reality shows'}
];

//load questions into mongoDB
for (i = 0; i< questionsArray.length; i++) {
    db.questions.insert(questionsArray[i])
    console.log('Q:' + i + 'loaded');
}



//return desired question from mongo questions collection
exports.getQ = function (desiredQ) {
    var returnQuestion = db.questions.find({}, function (err, question) {
        if (err) {
            console.log('err!')
        }
        else {
            //code to return desired question as a js object
            console.log(question[desiredQ].q);
            return question[desiredQ];
        }
    })

    //check to see if the questions collection is loaded
    db.questions.find({}, function (err, question) {
        if (!question) {
            //load questions into mongoDB
            for (i = 0; i< questionsArray.length; i++) {
                db.questions.insert(questionsArray[i])
            }
            returnQuestion();
            console.log()
        }
        else {
            if (err) {
                console.log('err!')
            }
            else {
                //code to return desired question as a js object
                return question[desiredQ];
            };
        }
    })
}


