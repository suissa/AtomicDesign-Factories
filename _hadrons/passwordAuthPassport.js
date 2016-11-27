module.exports = {
  'facebookAuth'      :{
      'clientID'      : process.env.facebookAuth_clientID
    , 'clientSecret'  : process.env.facebookAuth_clientSecret
    , 'callbackURL'   : 'http://localhost:8080/users/auth/facebook/callback'
  }
  ,'twitterAuth'        : {
      'consumerKey'     : 'your-consumer-key-here'
    , 'consumerSecret'  : 'your-client-secret-here'
    , 'callbackURL'     : 'http://localhost:8080/auth/twitter/callback'
  }
  ,'googleAuth'       :{
      'clientID'      : 'your-secret-clientID-here'
    , 'clientSecret'  : 'your-client-secret-here'
    , 'callbackURL'   :'http://localhost:8080/auth/google/callback'
  }
  ,'githubAuth': {
      'clientID'      : process.env.githubAuth_clientID
    , 'clientSecret'  : process.env.githubAuth_clientSecret
    , 'callbackURL'   : 'http://localhost:8080/users/auth/github/callback'
  }
};
