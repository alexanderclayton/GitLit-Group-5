const router = require('express').Router();
const { Topic } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body
        const topicData = await Topic.create({ title: title, username: req.session.username, content: content });
        req.session.save(() => {
        });
        res.status(200).json(topicData);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;