const express = require('express');
const isLoggedIn = require('../middleware');
const Product = require('../models/product');
const User = require('../models/user');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/cart/:productid/add', isLoggedIn, async (req, res) => {

    try {
        const {
            productid
        } = req.params;
        const product = await Product.findById(productid);
        const userid = req.user._id;

        const currentUser = req.user;
        if (currentUser.cart.length > 0) {
            const cart = currentUser.cart;
            const isPresent = cart.some((ele) => ele.product == productid);

            if (isPresent) {

                const current = cart.filter((ele) => ele.product == productid);
                const qty = current[0].qty;
                await User.findByIdAndUpdate(userid, {
                    $pull: {
                        cart: {
                            product: productid
                        }
                    }
                });

                await currentUser.cart.push({
                    product: product,
                    qty: qty + 1
                });

            } else {
                await currentUser.cart.push({
                    product: product,
                    qty: 1
                });

            }

        } else {
            await currentUser.cart.push({
                product: product,
                qty: 1
            });

        }


        await currentUser.save();

        req.flash('success', 'Item added to your cart successfully');
        res.redirect(`/products/${productid}`);
    } catch (e) {
        req.flash('error', 'Oops something went wrong');
    }

})


router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userid = req.user._id;
    const user = await User.findById(userid).populate('cart.product');

    res.render('cart/userCart', {
        user
    });
})


router.delete('/cart/:id/remove', isLoggedIn, async (req, res) => {


    const productid = req.params.id;;

    const userid = req.user._id;

    await User.findByIdAndUpdate(userid, {
        $pull: {
            "cart": {
                product: productid
            }
        }
    });
    res.redirect('/user/cart');

})




router.patch('/cart/:productid/decrement', async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const product = await Product.findById(productid);
        const userid = req.user._id;

        const currentUser = req.user;
        const cart = currentUser.cart;
        const current = cart.filter((ele) => ele.product == productid);
        const qty = current[0].qty;
        if (qty == 1) {

            req.flash('success', 'Quanity Cannot be reduced further');
            res.redirect('/user/cart');

        } else {
            await User.findByIdAndUpdate(userid, {
                $pull: {
                    cart: {
                        product: productid
                    }
                }
            });

            await currentUser.cart.push({
                product: product,
                qty: qty - 1
            });

            await currentUser.save();
            req.flash('success', 'Item Quantity decreased successfully');
            res.redirect('/user/cart');
        }
    } catch (e) {
        console.log(e);
        req.flash('error', 'Oops something went wrong...');
        res.redirect('/user/cart');

    }
});


router.patch('/cart/:productid/increment', async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const product = await Product.findById(productid);
        const userid = req.user._id;

        const currentUser = req.user;
        const cart = currentUser.cart;
        const current = cart.filter((ele) => ele.product == productid);
        const qty = current[0].qty;

        await User.findByIdAndUpdate(userid, {
            $pull: {
                cart: {
                    product: productid
                }
            }
        });

        await currentUser.cart.push({
            product: product,
            qty: qty + 1
        });

        await currentUser.save();
        req.flash('success', 'Item Quantity Increased successfully');
        res.redirect('/user/cart');

    } catch (e) {
        console.log(e);
        req.flash('error', 'Oops something went wrong...');
        res.redirect('/user/cart');

    }
})

module.exports = router;