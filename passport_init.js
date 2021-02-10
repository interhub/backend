const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy;
console.log('hello')

passport.use(new BasicStrategy(
    function (userid, password, done) {
        console.log(userid, 'userid')
        const err = false
        const user = { name: 'Mike', id: 1, age: 20 }
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
    }
));
