

// ye logic check krke btata hai wheather the usr is authenticated user or not

const isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to login first');
        return res.redirect('/login');
    }
    next();

}

module.exports = isLoggedIn;