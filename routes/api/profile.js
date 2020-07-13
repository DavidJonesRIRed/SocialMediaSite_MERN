const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { Profile } = require('../../models/Profile');
const { User } = require('../../models/User');

// @route  Get api/profile
// @desc   Test route
// @acess  Public
//router.get('/', (req,res) => res.send('Profile Route'));

// @route  Get api/profile/me
// @desc   Get current users profile
// @acess  Private
router.get('/me', auth, async (req,res) => {
  try{
    const profile = await Profile.findOne({ user: req.user.id }).populate('user',
    ['name','avatar']);

    if(!profile){
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch(err) {
    console.log(error);
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/* router.post("/posts", async (req, res) => {
    const post = new Post({
        userId: req.body.userId,
        fName: req.body.fName,
        lName: req.body.lName,
        name: req.body.name,
        occupation: req.body.occupation,
        educationLevel: req.body.educationLevel,
        resourceIds: req.body.resourceIds,
        certifications: req.body.certifications,
        city: req.body.city,
        state: req.body.state,
        githubUrl: req.body.githubUrl,
        twitterUrl: req.body.twitterUrl,
        youtubeUrl: req.body. youtubeUrl,
        summary: req.body.summary,
        timestamps: req.body.timestamps,
        avatar: req.body.avatar,
    })
    await post.save()
    res.send(post)
  }) */

module.exports = router;