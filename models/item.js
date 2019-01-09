'use strict';
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        image: DataTypes.STRING,
        text: DataTypes.STRING,
        mask: DataTypes.STRING
    }, {});
    Item.associate = function (models) {
    };
    return Item;
};
