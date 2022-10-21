const asyncHandler = require('express-async-handler');
const Bus = require('../models/basModel');

const getbases = asyncHandler(async (req, res) => {
        const buses = await Bus.find({});
        res.json(buses);
    });

const createbas = asyncHandler(async (req, res) => {
    const {nombre_bas, ame,date_arriver, date_depart,ville_arriver,ville_depart, places} = req.body;
    if(!nombre_bas || !name || !places ||!date_arriver||!date_depart||!ville_arriver||!ville_depart) {
        res.status(400).json({ message:'text is required or place is not valid'});
    };
    const bus = await bas.create({
        nombre_bas,
        Name,
        date_arriver,
        date_depart,
        ville_arriver,
        ville_depart,
        places,
    });
    res.status(200).json(bus);
});
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
const deletebas = asyncHandler(async (req, res) => {
    const bus = await Bus.findById(req.params.id);
    if(!bus){
        res.status(400)
        throw new Error('Bas not found');
    }
    await Bus.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Bas deleted'});
});


    module.exports = {
        getbases,
        createbas,
        updatebas,
        deletebas,
    };