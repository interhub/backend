const express = require('express')
const passport = require('passport')
require('./passport_init.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/login|/register', (req, res, next) => {
    console.log('call reg or login')
    res.redirect('/')
})

app.get('/private',
    passport.authenticate('basic', { session: false }),
    function (req, res) {
        res.json(req.user);
    });

const PORT = 3001;

app.listen(PORT, () => {
    console.log('SERVER START ON PORT', PORT);
});
