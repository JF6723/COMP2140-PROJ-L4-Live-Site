const express = require('express');
const router = express.Router();

// import the index controller
const IndexController = require('../Controllers/index');

/* GET Default Route */
router.get('/', (req, res, next)=>{IndexController.DisplayHome(req, res, next);});

/* GET Home Page */
router.get('/home', (req, res, next)=>{IndexController.DisplayHome(req, res, next);});

/* GET About Page */
router.get('/about', (req, res, next)=>{IndexController.DisplayAbout(req, res, next);});

/* GET Products Page */
router.get('/products', (req, res, next)=>{IndexController.DisplayProducts(req, res, next);});

/* GET Services Page */
router.get('/services', (req, res, next)=>{IndexController.DisplayServices(req, res, next);});

/* GET Services Page */
router.get('/contact', (req, res, next)=>{IndexController.DisplayContact(req, res, next);});

module.exports = router;
