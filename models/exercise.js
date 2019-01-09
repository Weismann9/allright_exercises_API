'use strict';
module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: DataTypes.STRING,
        type: DataTypes.STRING
    }, {});
    Exercise.associate = function (models) {
        Exercise.hasMany(models.Item, {
            foreignKey: 'exercise_id',
            as: 'items'
        })
    };
    return Exercise;
};