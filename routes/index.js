const express = require('express');
const router = express.Router();
const userCotroller = require('../controllers/userCotroller');

module.exports = () => {
    router.get("/", userCotroller.UseHome);
    router.get("/login", userCotroller.UseLogin);
    return router;
}
