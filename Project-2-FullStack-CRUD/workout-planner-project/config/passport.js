const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const Google = require('../models/google.model')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},

function(accessToken, refreshToken, profile, cb){
    Google.findOne({ 'googleId': profile.googleId}, function(err, googleOAuth){
        if (err) return cb(err);
        if (googleOAuth){
            return cb(null, googleOAuth);
        }else{
            // we have a new student via OAuth!
            var newGoogle = new Google({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
        })
        newGoogle.save(function(err){
            if (err) return cb(err);
            return cb(null, newGoogle);
        });
    }
  });
}
));
passport.serializeUser(function(googleOAuth, done){
    done(null, googleOAuth.id)
  })

passport.deserializeUser(function(id,done){
    Google.findById(id, function(err, googleOAuth){
        done(err, googleOAuth)
    })
})