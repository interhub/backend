const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy;

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

passport.use(new BasicStrategy(
    function (userid, password, done) {
        console.log(userid, 'userid', password, 'password')
        const err = false
        const user = { name: 'Mike', id: 1, age: 20 }
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
    }
));
