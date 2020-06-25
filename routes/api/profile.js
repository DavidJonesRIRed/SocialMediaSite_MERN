const express = require('express');
const router = express.Router();

// @route  Get api/profile
// @desc   Test route
// @acess  Public
router.get('/', (req,res) => res.send('Profile Route'));

router.post("/posts", async (req, res) => {
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
  })

module.exports = router;