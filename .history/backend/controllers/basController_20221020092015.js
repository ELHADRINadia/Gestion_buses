const asyncHandler = require('express-async-handler');
const Bus = require('../models/busModel');

// @desc    Get all buses
// @route   GET /api/buses
// @access  Public
const getBuses = asyncHandler(async (req, res) => {
        const buses = await Bus.find({});
        res.json(buses);
    });
// @desc Create a bus
// @route POST /api/buses
// @access Public
const createBus = asyncHandler(async (req, res) => {
    const {busNumber, busName, place} = req.body;
    if(!busNumber || !busName || !place || place < 1 || place > 50) {
        res.status(400).json({ message:'text is required or place is not valid'});
    };
    const bus = await Bus.create({
        busNumber,
        busName,
        place,
    });
    res.status(200).json(bus);
});

// @desc Update a bus
// @route PUT /api/buses/:id
// @access Public
const updateBus = asyncHandler(async (req, res) => {
    const {busNumber, busName, place} = req.body;
    const bus = await Bus.findById(req.params.id);
    if(!bus){
        res.status(400)
        throw new Error('Bus not found');
    }
    const updating = await Bus.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updating);
});

// @desc Delete a bus
// @route DELETE /api/buses/:id
// @access Public
const deleteBus = asyncHandler(async (req, res) => {
    const bus = await Bus.findById(req.params.id);
    if(!bus){
        res.status(400)
        throw new Error('Bus not found');
    }
    await Bus.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Bus deleted'});
});


    module.exports = {
        getBuses,
        createBus,
        updateBus,
        deleteBus,
    };