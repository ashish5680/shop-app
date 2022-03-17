

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const app = express();


const mongoose = require('mongoose');
const path = require('path');




const seedDB = require('./seebDB');

const methodOverride = require('method-override');


const session = require('express-session')
const flash = require('connect-flash');




const passport = require('passport');
const LocalStratergy = require('passport-local');
const User = require('./models/user');



const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoute');
const cartRouter = require('./routes/cartRoutes');
const orderRouter = require('./routes/orderRoute');




app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'));







const sessionConfig = {
    secret: 'ineedbettersecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());




app.use(passport.initialize());
app.use(passport.session());




passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.
app.use((req, res, next) => {
    // iske baad success wala variable har ek template ke uper applicable hoo jega
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})




// Using routers
app.use(productRouter);
app.use(authRouter);
app.use(cartRouter);
app.use(orderRouter);



app.get('/', (req, res) => {
    res.render('home');
});






// mongodb://localhost:27017/shopApp-db       // local database
// process.env.MONGO_URL      
// Connecting to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database shopApp-db');
        // seedDB();                // seeding the database with dummy data
    })
    .catch((err) => {
        console.log(err);
    });










const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Connected at port 3000');
})