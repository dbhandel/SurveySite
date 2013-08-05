
/*
 * GET home page.
 */

exports.index = function(req, res){

    var displayQ = require('../collections.js').getQ(0);
    console.log(displayQ);
    res.render('index', {question: displayQ, action: '/1'});
};
