const routes = require('express').Router();
const lesson1contoroller = require("../controllers/lesson1")

routes.get('/', lesson1contoroller.homeRoute);
routes.get('/hannah', lesson1contoroller.hannahRoute);

module.exports = routes;