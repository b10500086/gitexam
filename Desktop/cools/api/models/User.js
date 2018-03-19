module.exports = {
    attributes: {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true
      },
      accountID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      nickName: Sequelize.STRING(50),
      
    },
    options: {
      tableName: 'feeds',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
      updatedAt: 'lastUpdateTime',
      createdAt: 'createTime',
      classMethods: {
        
      }
    }
  };
  