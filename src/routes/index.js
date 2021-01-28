const express = require('express');
const {index, goToLogin, login, goToSignup, signup, showProfile} = require('../controllers/indexController');
const uploadAvatar = require('../middlewares/uploadAvatar');

const router = express.Router();

/* GET home page. */
router.get('/', index);

router.get('/login', goToLogin);
router.post('/login', login);

router.get('/register', goToSignup);
router.post('/register', uploadAvatar.single('avatar') , signup);

router.get('/profile/:username', showProfile);

module.exports = router;
