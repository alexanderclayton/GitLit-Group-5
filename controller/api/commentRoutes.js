const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.session)
    try {
        const { content, topic_id } = req.body
        const commentData = await Comment.create({ comment_username: req.session.username, comment_content: content, topic_id: parseInt(topic_id) });
        res.status(200).json(commentData);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;