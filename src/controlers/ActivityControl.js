const Activity = require('../modals/Activity');

module.exports = {
    async index(req, res) {


        const data = await Activity.findAll();

        if (data == "" || data == null) {
            return res.status(404).send({ 'message': 'Activity not found' });
        }

        return res.status(200).send({ data });

    },

    async store(req, res) {
        const { name, status } = req.body;

        data = await Activity.findOne({ where: { name: name } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'Activity already exists',
                space: data

            });
        }

        const activity = await Activity.create({ name, status });

        return res.status(200).send({
            erro: false,
            message: 'Activity created success',
            activity
        })

    },


    async update(req, res) {
        const { name, status } = req.body;
        const { activity_id } = req.params;

        data = await Activity.findOne({ where: { id: activity_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'Activity does not exist to update'
            });
        }

        await Activity.update({
            name, status
        }, {
            where: {
                id: activity_id,
            }
        });

        return res.status(200).send({
            erro: false,
            message: "Activity update with success"
        });

    },

    async delete(req, res) {
        const { activity_id } = req.params;
        data = await Activity.findOne({ where: { id: activity_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'Activity does not exist to delete'
            });
        }

        await Activity.destroy({
            where: {
                id: activity_id
            }
        });

        return res.status(200).send({
            erro: false,
            message: "activity delete with success",
            deleted: data

        });

    }

};
