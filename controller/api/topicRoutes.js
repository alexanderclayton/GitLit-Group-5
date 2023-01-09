const router = require('express').Router();
const { Topic } = require('../models');

router.post('/', async (req, res) => {
    try {
        const { title, user, content } = req.body
        const userData = await Topic.create({ title: title, username: user, content: content });
        req.session.save(() => {
            res.status(200).json(userData);
        });
    } catch (err) {
    res.status(400).json(err);
    }
});