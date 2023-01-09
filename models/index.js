const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

Topic.hasMany(Comment, {
    foreignKey: 'topic_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Topic, {
    foreignKey: 'topic_id'
});

module.exports = { User, Topic, Comment};
