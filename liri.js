// links my keys js fiel to this one
var keys = require('./keys.js')
// links tiwtter api to application
var Twitter = require('twitter')
var getMyTweets = function(){

    
    var client = new Twitter(keys.twitterKeys);
    
    var params = {screen_name: 'inrtracker'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error){
            for (var i = 0 ; i<tweets.length; i++){
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
            }
        }
    });
}

var pick = function (caseData, functionData) {
    switch(caseData){
        case 'my-tweets':
            getMyTweets();
            break;
        default:
        console.log('LIRI does not know that');
    }
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo)
};
runThis(process.argv[2], process.argv[3]);
