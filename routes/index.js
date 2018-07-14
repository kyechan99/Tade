var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('business/index', { title: 'Tade index page'});
});
router.get('/main', function(req, res) {
    res.render('business/main');
})
router.get('/login', function(req, res) {
    res.render('business/login');
});
router.get('/about', function(req, res) {
    res.render('business/about');
});
router.get('/note', function(req, res) {
    res.render('business/note');
});
router.get('/novel', function(req, res) {
    res.render('business/novel');
});
router.get('/profile', function(req, res) {
    res.render('business/profile');
})

module.exports = router;