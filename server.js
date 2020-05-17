const express = require('express');
const Twitt = require('twit');
var Twitter = require("node-twitter-api");
// secret = include("secret");
var path = require('path');
const app = express();
var url = require('url');

var client;

var twitter = new Twitter({
  consumerKey: '2XVgveSxh2AQl7z8GkypX9bg4',
  consumerSecret: 'OMBwJUlQQsVhoFrNjhQTB82sJUoNat6XOOqKwelqp3F98UPBqa',
  callback: 'https://tweet-helpdesk.herokuapp.com/callback'
});

// client = new Twitt({
//   consumer_key: '2XVgveSxh2AQl7z8GkypX9bg4',
//   consumer_secret: 'OMBwJUlQQsVhoFrNjhQTB82sJUoNat6XOOqKwelqp3F98UPBqa',
//   access_token: "2983080726-8sfihuoHpjj4MiXzbTSr7kDGpqjVrQUlErxNSK6",
//   access_token_secret: "h3uyxTBGP7XEsHqJPSURtgD6LJPLwrGuhBFyGLJyUQpxL"
// });


app.use(require('cors')());
app.use(require('body-parser').json());
app.use(express.static(__dirname + '/dist/client'));

var _requestSecret;

// Login Url

app.get('/login', function (request, res) {
  res.sendFile(path.join(__dirname + '/login.html'));

});

// Getting Request Token

app.get("/request-token", function (req, res) {
  twitter.getRequestToken(function (err, requestToken, requestSecret) {
    if (err)
      res.status(500).send(err);
    else {
      _requestSecret = requestSecret;
      res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
    }
  });
});

// Getting Access Token and Access Secret Token

app.get("/access-token", function (req, res) {
  var requestToken = req.query.oauth_token,
    verifier = req.query.oauth_verifier;
  console.log('acc');
  twitter.getAccessToken(requestToken, _requestSecret, verifier, function (err, accessToken, accessSecret) {
    if (err)
      res.status(500).send(err);
    else
      twitter.verifyCredentials(accessToken, accessSecret, function (err, user) {
        if (err)
          res.status(500).send(err);
        else
          res.send(user);
        console.log(user);

        client = new Twitt({
          consumer_key: '2XVgveSxh2AQl7z8GkypX9bg4',
          consumer_secret: 'OMBwJUlQQsVhoFrNjhQTB82sJUoNat6XOOqKwelqp3F98UPBqa',
          access_token: accessToken,
          access_token_secret: accessSecret

        });

      });
  });
});

// Getting callback Url

app.get('/callback', function (request, res) {
  res.sendFile(path.join(__dirname + '/callback.html'));
});

// Getting latest timeline

app.get('/home_timeline', (req, res) => {
  const params = { tweet_mode: 'extended', count: 15 };

  client
    .get(`statuses/home_timeline`, params)
    .then(timeline => {

      res.send(timeline);
    })
    .catch(error => {
      res.send(error);
    });

});

// Getting Mentions Timeline

app.get('/mentions_timeline', (req, res) => {
  const params = { tweet_mode: 'extended', count: 10 };

  client
    .get(`statuses/mentions_timeline`, params)
    .then(timeline => {

      res.send(timeline);
    })
    .catch(error => {
      res.send(error);
    });

});

// search get replies

app.get('/search/tweets', (req, res) => {
  var parts = url.parse(req.url, true);
  var query = parts.query;
  // console.log(parseInt(query.since_id));
  client.get('search/tweets', {q: query.q,since_id : parseInt(query.since_id) }).then(result => {
   res.send(result.data)
 })

});

// search post replies

app.post('/tweets/reply', (req, res) => {
  reply = req.body;

   client.post('statuses/update',{ in_reply_to_status_id: reply.id, status: "@"+reply.username +" " + reply.status })
   .then(result => {
     console.log(result);
     res.send(result);
     
   }).catch(err =>{
     console.log(err);
   })
 })

// });



// Posting Tweet

app.post('/post_tweet', (req, res) => {

  tweet = req.body;

  client
    .post(`statuses/update`, tweet)
    .then(tweeting => {
      console.log(tweeting);

      res.send(tweeting);
    })

    .catch(error => {
      res.send(error);
    });

});


// Calling angular client side

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});


// Running server

app.listen(process.env.PORT || 3000, () => console.log('Server running'));