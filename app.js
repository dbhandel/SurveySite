
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , question = require('./routes/question')
  , http = require('http')
  , path = require('path')
  , index = require('./routes/index');


var app = express();
var RedisStore = require('connect-redis')(express);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({store: new RedisStore({
    host: '127.0.0.1',
    port: 6380,
    prefix: 'sess'
}), secret: 'SEKR37'}));
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*

<<<<<<< Updated upstream
=======
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
*/
/*

//return desired question from mongo questions collection
var getQ = function (desiredQ) {
    db.questions.find({}, function (err, question) {
        if (err || !question) {
            console.log('No questions found!')
        }
        else {
            //code to return desired question as a js object
            //question.forEach( function(question) {
                console.log(question[desiredQ]);
            console.log(typeof question[desiredQ]);
        }

            //console.log('question');
            //code to return desired question as a js object
    })
}

getQ(3);
*/
/*

var indexQuestion = getQ(0);
console.log(indexQuestion);
*/

>>>>>>> Stashed changes

//Thank you page appears at top of custom routes because /thanks
//would be picked up as the questionID
app.get('/thanks', function (req, res) {
    res.render('thanks');
});


app.get('/',index.index);
app.get('/:questionID',question.question);

//testing out a signedCookie
/*app.get('/counter', function(req, res) {
    var count = req.signedCookies.count || 0;
    count ++;
    res.cookie('count', count, {signed: true});
    res.send('Count: ' + count);
});*/


        http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
