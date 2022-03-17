const express = require('express');
const sendEmail = require('../sendGrid');
const User = require('../models/user');

const router = express.Router();


router.get('/orders', async (req, res) => {

    const userid = req.user._id;
    const user = await User.findById(userid).populate('orders.product');



    res.render('orders/allOrders', {
        user
    });
})



router.post('/placeorder', async (req, res) => {

    const email = req.user.email;
    console.log('email:' + email);

    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            .mainDiv{
                background: #444691;
                width: 450px;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .inner{
                width: 350px;
                height: 300px; 
                background-color: white !important;
                margin:40px auto  
            }
            .header h1{
                text-align: center;
            }
            .header{
                background: #a8dadc;
                padding: 10px;
                color: white;
            }
            p{
                padding: 10px;
                font-size: 1.1rem;
            }
        </style>
    </head>
    <body>
    
            <div class="mainDiv">
                <div class="inner">
                    <div class="header">
                        <h1>ORDER PLACED</h1>
                    </div>
                    <div>
                    <p>
                        Hi ${req.user.username},<br><br>
    
                    Confirmation of order has placed. <br><br><br>
                    Thanks! <br>
                    Team ShopApp
                    </p>
                    </div>
                </div>
        </div>
        
    </body>
    </html>`;







    const currentUser = req.user;

    await currentUser.save();

    const userid = req.user._id;

    await User.findByIdAndUpdate(userid, {
        $push: {
            "orders": currentUser.cart,

        }
    });

    await User.findByIdAndUpdate(userid, {
        $pull: {
            "cart": {}
        }
    });




    sendEmail(email, template, ` Hi ${req.user.username},Confirmation of order has placed. Thanks!  Team ShopApp`);
    req.flash('success', 'Order Placed Successfully!!!');
    res.redirect('/products');

})





module.exports = router;