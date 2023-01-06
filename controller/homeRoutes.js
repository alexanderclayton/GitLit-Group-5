const router = require('express').Router();
const { User, Topic, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbTopicData = await Topic.findAll({
            include: [
                {
                    model: Topic,
                    attributes: ['title', 'username', 'timestamp', 'content'],
                }
            ]
        });

        const topics = dbTopicData.map((topic) =>
        topic.get({ plain: true })
        );

        res.render('homepage', {
            topics,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
   res.render('login');
})

router.get('topic/:id', withAuth, async (req, res) => {
    try {
        const dbTopicData = await Topic.findByPk(req.params.id, {
            include: [
                {
                    model: Topic,
                    attributes: [
                        'title',
                        'username',
                        'timestamp',
                        'content',
                    ],
                },
            ],
        });

        const topic = dbTopicData.get({ plain: true });

        res.render('topic', {
            ...topic,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router;