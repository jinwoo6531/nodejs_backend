const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', //이모티콘까지 추가할경우
      collate: 'utf8_general_ci', //한글 저장
    }
  );
  Post.associate = (db) => {};
  return Post;
};
