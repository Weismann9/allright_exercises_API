const Item = require('../models').Item;

module.exports = {
    create(req, res){
        return Item
            .create({
                image: req.body.image,
                text: req.body.text,
                mask: req.body.mask,
                exercise_id: req.body.exercise_id
            })
            .then((item)=> res.status(201).send(item))
            .catch((error) => res.status(400).send(error))
    },

    get(req, res){
        return Item
            .findAll()
            .then((items)=> res.status(200).send(items))
            .catch((error) => res.status(400).send(error))
    },

    getById(req, res){
        return Item
            .findById(req.params.id)
            .then((item)=> {
                if (!item) {
                    return res.status(404).send({
                        message: 'Item Not Found',
                    });
                }
                return res.status(200).send(item)
            })
            .catch((error) => res.status(400).send(error))
    },

    update(req, res){
        return Item
            .findById(req.params.id)
            .then((item)=> {
                if (!item) {
                    return res.status(404).send({
                        message: 'Item Not Found',
                    });
                }
                return item
                    .update({
                        image: req.body.image || item.image,
                        text: req.body.text || item.text,
                        mask: req.body.mask || item.mask,
                        exercise_id: req.body.exercise_id || item.exercise_id
                    })
                    .then((item)=> res.status(200).send(item))
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    delete(req, res){
        return Item
            .findById(req.params.id)
            .then((item)=> {
                if (!item) {
                    return res.status(404).send({
                        message: 'Item Not Found',
                    });
                }
                return item
                    .destroy()
                    .then(()=> res.status(204).send())
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    }
};
