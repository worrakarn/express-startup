const HelloModel = require('../model/hello.model');

exports.hello_get = function(req, res) {
    res.send(HelloModel.hello('Hello World'));
};