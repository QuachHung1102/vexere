const { Trip, Station } = require('../models/index');

const createTrip = async (req, res) => {
    const trip = req.body;
    console.log(trip);
    const newTrip = await Trip.create(trip);
    res.status(201).send(newTrip);
}

const getAllTrip = async (req, res) => {
    const tripList = await Trip.findAll({
        include: [
            {
                model: Station,
                as: "from",
            },
            {
                model: Station,
                as: "to",
            }
        ]
    });
    res.status(200).send(tripList);
}

const updateTrip = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const trip = await Trip.findOne({ where: { id } });
    try {
        if (trip) {
            await Trip.update(data, { where: { id } });
            res.status(200).send(`Đã update thành công trip id: ${id}`);
        } else {
            res.status(404).send(`Not Found`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTrip = async (req, res) => {
    const { id } = req.params;
    const trip = await Trip.findOne({ where: { id } });
    try {
        if (trip) {
            await Trip.destroy({ where: { id } });
            res.status(200).send(trip);
        } else {
            res.status(404).send(`Not Found`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTrip,
    getAllTrip,
    updateTrip,
    deleteTrip,
};
