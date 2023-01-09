const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

Topic.hasMany(Comment, {
    foreignKey: 'id',
    onDelete: 'cascade'
});

Comment.belongsTo(Topic, {
    foreignKey: 'id'
});

User.hasMany(Topic, {
    foreignKey: 'username'
});

Topic.belongsTo(User, {
    foreignKey: 'username'
});

User.hasMany(Comment, {
    foreignKey: 'comment_username'
});

Comment.belongsTo(User, {
    foreignKey: 'comment_username'
})

module.exports = { User, Topic, Comment};
