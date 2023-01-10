const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

Topic.hasMany(Comment, {
    foreignKey: 'id', //issue with the foreign key?
    onDelete: 'cascade'
});

Comment.belongsTo(Topic, {
    foreignKey: 'id' //issue with the foreign key?
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
