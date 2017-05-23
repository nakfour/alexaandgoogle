var Twit = require('twit')

var T = new Twit({
  consumer_key:         'CCh2VIJWFN4OGErh2Npye5aBx',
  consumer_secret:      'F0fJ1AY6LanmuDQDtQGJsx26lkIVO6I1W1SBEQBYXwsbeU2FqN',
  access_token:         '778609197046964224-97OkSNtf4j90ViY3Y2IEYH21Nx5afmy',
  access_token_secret:  'UWN02HNs9ZqyJ6ZnlywzDMjf2LTqGyGATj0E43XkujPaS',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var getTweets = function() {

    T.get('search/tweets', { q: '#predict452bot', count: 100 }, function(err, data, response) {
    console.log(data)
    return data;
    })
};


module.exports.getTweets = getTweets;