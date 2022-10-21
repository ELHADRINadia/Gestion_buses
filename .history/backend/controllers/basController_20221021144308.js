const asyncHandler = require('express-async-handler');
const Bus = require('../models/basModel');

const getbases = asyncHandler(async (req, res) => {
        const buses = await Bus.find({});
        res.json(buses);
    });

const createbas = async (req, res) => {
    const {Nombre_bas, Name,date_arriver, date_depart,ville_arriver,ville_depart, places} = req.body;
    if(!Nombre_bas || !Name || !places ||!date_arriver||!date_depart||!ville_arriver||!ville_depart) {
        res.status(400).json({ message:'text is required or place is not valid'});
    };
    const bus = await Bus.create({
        Nombre_bas,
        Name,
        date_arriver,
        date_depart,
        ville_arriver,
        ville_depart,
        places,
    });
    res.status(200).json(bus);
};
const updatebas = asyncHandler(async (req, res) => {
    const {nombre_bas, Name,date_arriver, date_depart,ville_arriver,ville_depart, places} = req.body;
    const bus = await Bus.findById(req.params.id);
    if(!bus){
        res.status(400)
        throw new Error('Bas not found');
    }
    const update = await Bus.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(update);
});
const deletebas = async (req, res) => {
    const bus = await Bus.findById(req.params.id);
    if(!bus){
        res.status(400)
        throw new Error('Bus not found')
    }
    await Bus.remove()

    res.status(200).json({id: req.params.id})
};


    module.exports = {
        getbases,
        createbas,
        updatebas,
        deletebas,
    };