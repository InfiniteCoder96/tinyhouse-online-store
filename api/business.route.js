const express = require('express');
const businessRoutes = express.Router();

// require business model in routes module
let Business = require('./business.model');

// defined store route
businessRoutes.route('/addProduct').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business is added successfully'});
        })
        .catch(err => {
           res.status(400).send("unable to save to database");
        });
});

// defined get data route
businessRoutes.route('/').get(function (req, res) {
   Business.find(function (err, businesses) {
       if(err){
           console.log(err);
       }
       else{
           res.json(businesses);
       }
   })
});

// defined edit route


module.exports = businessRoutes;