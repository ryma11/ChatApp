const express = require('express');
const jwtHepler = require('../config/jwtHelper')
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
// router.post('/hook', ctrlUser.hook);
router.post('/login', ctrlUser.authenticate);
// make this route private with funcJWT using JWT verification
router.get('/userProfile', jwtHepler.verifyJWtToken, ctrlUser.UserProfile);



module.exports = router;