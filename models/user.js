module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
        unique: true, //고유한 값
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, //필수
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 저장
    }
  );
  User.associate = (db) => {};
  return User;
};
