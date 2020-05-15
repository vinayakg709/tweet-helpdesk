const express = require('express');
const Twitt = require('twit');
var Twitter = require("node-twitter-api");
// secret = include("secret");
var path = require('path');
const app = express();

var myaccessToken;
var myaccessTokenSecret;
var client;

var twitter = new Twitter({
  consumerKey: '2XVgveSxh2AQl7z8GkypX9bg4',
  consumerSecret: 'OMBwJUlQQsVhoFrNjhQTB82sJUoNat6XOOqKwelqp3F98UPBqa',
  callback: 'http://localhost:3000/callback'
});



app.use(require('cors')());
app.use(require('body-parser').json());
app.use(express.static(__dirname + '/dist/client'));

var _requestSecret;


app.get('/login', function (request, res) {
  res.sendFile(path.join(__dirname + '/login.html'));

});

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

app.get('/callback', function (request, res) {
  res.sendFile(path.join(__dirname + '/callback.html'));
});


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


app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});




app.listen(process.env.PORT || 3000, () => console.log('Server running'));