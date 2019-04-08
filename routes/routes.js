const express = require('express');
const router = express.Router();

const helloController = require('../src/controller/hello.controller');

//HelloController
router.get('/', helloController.hello_get)

module.exports = router;