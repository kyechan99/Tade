var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('business/index', { title: 'Tade index page'});
});

module.exports = router;