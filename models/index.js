const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

Topic.hasMany(Comment, {
    foreignKey: 'topic_id', //issue with the foreign key?
});

Comment.belongsTo(Topic, {
    foreignKey: 'topic_id' //issue with the foreign key?
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


module.exports = { User, Topic, Comment};
