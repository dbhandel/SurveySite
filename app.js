
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , question = require('./routes/question')
  , index = require('./routes/index')
  , count = require('./routes/count')
  , http = require('http')
  //, databaseUrl = "SurveySite"
  //, collections = ["questions", "users"]
  , path = require('path');

var app = express();
var RedisStore = require('connect-redis')(express);

//var db = require("mongojs").connect(databaseUrl, collections);

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


//Thank you page appears at top of custom routes because /thanks
//would be picked up as the questionID
app.get('/thanks', function (req, res) {
    res.render('thanks');
});


app.get('/',index.index);

// '/count' must preceed /:questionID or 'count' will be read as the question ID
app.get('/count', count.questionsCount);

app.get('/:questionID',question.question);




http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
