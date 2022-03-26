
const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');




const userSchema = new mongoose.Schema({


    // Ye username and password likhne ki jrut nahi h
    //  passport-local-mongoose automatically add krdega schema ke andr
    
    // username: {
    // },

    // password: {
    // },



    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },

    category: {         // the category of user that wheather the user is seller or buyer
        type: String,
        trim: true,
        required: true,
    },

    cart: [{

        _id: false,
        
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        
        qty: {
            type: Number,
            min: 0
        }
    
    }],




    orders: [{
      
        _id: false,
      
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
      
      
        qty: {
            type: Number,
            min: 0
        },
      
      
        time: {
            type: Date,
        }
    
    }]



});






// hum jse hi ye plugin add krege ye automatically username, hash and salt wali field add krdega
userSchema.plugin(passportLocalMongoose);



const User = mongoose.model('User', userSchema);

module.exports = User;