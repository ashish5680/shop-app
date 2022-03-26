const express = require('express');
const router = express.Router();


const User = require('../models/user');
const passport = require('passport');



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Get the Signup page
router.get('/signup', (req, res) => {
    res.render('auth/signup');
})








// Register the new user to the database
router.post('/register', async (req, res) => {

    const credentials = req.body;

    console.log(req.body);

    try {

        const user = new User({
            username: credentials.username,
            email: credentials.email,
            category: credentials.category
        });

        await User.register(user, credentials.password);

        req.flash('success', `Welcome ${credentials.username}, Please login to continue!`);
        res.redirect('/products');

    } 
    
    catch (e) {
        console.log(e);
        req.flash('error', e.message);
        res.redirect('/signup');
    }


});












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//Get the login page
router.get('/login', (req, res) => {
    res.render('auth/login');
});




// Login the user
router.post('/login', 
    passport.authenticate('local', 
        {
            failureRedirect: '/login',
            failureFlash: true
        }),
        
    (req, res) => {

    const {username} = req.body;

    req.flash('success', `Welcome Back ${username} !!`);
    res.redirect('/products');

});










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Logout the user
router.get('/logout', (req, res) => {

    req.logOut();
    req.flash('success', 'Logout out Successfully!!!');

    res.redirect('/login');
    
})














module.exports = router;
