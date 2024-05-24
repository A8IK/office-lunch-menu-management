const dataBase = require('./database');

const item = require('./menu')(database, dataBase.DataTypes);
// const choose = require('./choice')(database, dataBase.DataTypes);

item.hasMany(choose, {as: 'Choosen Item'});
choose.belongsTo(item);

module.exports = {dataBase, item, choose};

