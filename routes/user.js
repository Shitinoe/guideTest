//const { check, validationResult } = require('express-validator/check');
const LocalStrategy = require('passport-local').Strategy;
module.exports = function(app, passport) {
    app.get('/', function(request,response,next){
        response.render('index', {title: 'Login'});
    })

    app.post('/', validate, passport.authenticate('local-signup', {
        sucessRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
    }))

    app.get('/dashboard', function(request,response,next){
        response.render('dashboard', {title: 'Dashboard'});
    })
}

function validate(req, res, next){
    req.checkBody('Login', 'Login is required').notEmpty();
    req.checkBody('Password', 'Password is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach((error) => {
            messages.push(error.msg);
        });

        req.flash('error', messages);
        res.redirect('/dashboard');
    }else{
        return next();
    }
}