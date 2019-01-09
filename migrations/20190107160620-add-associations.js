'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Items',
            'exercise_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Exercises',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Items',
            'exercise_id'
        )
    }
};
