const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_username: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'username',
            }
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
            default: 'no comment',
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'topic',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false, /*maybe true?*/
        modelName: 'comment',
    }
);

module.exports = Comment;