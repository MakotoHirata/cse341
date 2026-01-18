const routes = require('express').Router();
const lesson1contoroller = require("../controllers/lesson1")

routes.get('/', lesson1contoroller.homeRoute);
routes.get('/mari', lesson1contoroller.mariRoute);
routes.use('/contacts', require('./contacts'));

module.exports = routes;