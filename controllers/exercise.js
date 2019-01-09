const Exercise = require('../models').Exercise;
const Item = require('../models').Item;

module.exports = {
    create(req, res) {
        return Exercise
            .create({
                title: req.body.title,
                description: req.body.description,
                type: req.body.type,
                items: req.body.items
            }, {
                include: [{
                    model: Item,
                    as: 'items'
                }]
            })
            .then((exercise) => res.status(201).send(exercise))
            .catch((error) => res.status(400).send(error))
    },

    get(req, res) {
        return Exercise
            .findAll({
                include: [{
                    model: Item,
                    as: 'items'
                }]
            })
            .then((exercises) => res.status(200).send(exercises))
            .catch((error) => res.status(400).send(error))
    },

    getById(req, res) {
        return Exercise
            .findById(req.params.id, {
                include: [
                    {
                        model: Item,
                        as: 'items'
                    }
                ]
            })
            .then((exercise) => {
                if (!exercise) {
                    return res.status(404).send({
                        message: 'Exercise Not Found',
                    });
                }
                return res.status(200).send(exercise);
            })
            .catch((error) => res.status(400).send(error))
    },

    update(req, res) {
        return Exercise
            .findById(req.params.id, {
                include: [
                    {
                        model: Item,
                        as: 'items'
                    }
                ]
            })
            .then((exercise) => {
                if (!exercise) {
                    return res.status(404).send({
                        message: 'Exercise Not Found',
                    });
                }
                return exercise
                    .update({
                        title: req.body.title || exercise.title,
                        description: req.body.description || exercise.description,
                        type: req.body.type || exercise.type,
                        items: req.body.items || exercise.items
                    }, {
                        include: [{
                            model: Item,
                            as: 'items'
                        }]
                    })
                    .then(() => res.status(200).send(exercise))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error))
    },

    delete(req, res) {
        return Exercise
            .findById(req.params.id, {
                include: [
                    {
                        model: Item,
                        as: 'items'
                    }
                ]
            })
            .then((exercise) => {
                if (!exercise) {
                    return res.status(404).send({
                        message: 'Exercise Not Found',
                    });
                }
                return exercise
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error))
    }
};
