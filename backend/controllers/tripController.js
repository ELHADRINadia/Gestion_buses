const Trip = require("../models/tripModel");
const Bus = require("../models/basModel");


const createTrip =  (req, res) => {
    const {bus, ville_arriver, ville_depart,date_arriver,date_depart } = req.body
    const data = new Trip({place, bus, ville_arriver, ville_depart,date_arriver,date_depart });
    data.save()
    .then((trip) => {
        Bus.findById(bus)
        .then((bus) => {
            bus.placesRéservées = [...bus.placesRéservées, ...place]; 
            bus.save()
            .then((bus) => {
                res.status(200).send({
                    message: "place booked successfully",
                    data: trip,
                    success: true,
                  });
            })
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: "Trip failed",
            data: error,
            success: false,
          });
    })
  
} 

// get all Trips
const GetAllTrips = async (req, res) => {
  try {
    const trip = await Trip.find();
    res.status(200).send({
      message: "Trips fetched successfully",
      data: trip,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "No Trips Found",
      data: error,
      success: false,
    });
  }
};

const GetAllTripsByUser = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.body.userId });
    res.status(200).send({
      message: "Trips fetched successfully",
      data: trips,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "No Trips Found",
      data: error,
      success: false,
    });
  }
};

const deletetrip = async (req, res) => {
    const trip = await Trip.findById(req.params.id);
    if(!trip){
        res.status(400)
        throw new Error('Trip not found')
    }
    await Trip.remove()

    res.status(200).json({id: req.params.id})
};
module.exports = {
  createTrip,
  GetAllTrips,
  GetAllTripsByUser,
  deletetrip,
};