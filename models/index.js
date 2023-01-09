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

User.hasMany(Topic, {
    foreignKey: 'username'
});

Topic.belongsTo(User, {
    foreignKey: 'username'
});

User.hasMany(Comment, {
    foreignKey: 'username'
});

Comment.belongsTo(User, {
    foreignKey: 'username'
})

module.exports = { User, Topic, Comment};
