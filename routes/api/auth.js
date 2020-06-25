const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route  Get api/auth
// @desc   Test route
// @acess  Public
router.get('/', auth, async (req, res) => {
    //res.send('Auth route')
    try{
        const user = await User.findByID(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;