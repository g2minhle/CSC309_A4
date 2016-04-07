var
    Booking = require('../../models/booking');

module.exports = {
    getBookings: function(req, res) {
        Booking.find(
            {
                $or: [
                    { "trainerId": req.params.id },
                    { "traineeId": req.params.id }
                ]
            },
            function(err, docs) {
                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err) {
                    res.status(500).json({});
                } else if (docs) {
                    // if the user is found, then log them in
                    res.status(200).json(docs);
                } else {
                    res.status(404).json({});
                }
            }
        )
    },

    addBookings: function(req, res) {
        var newBooking = new Booking();

        newBooking.trainerId = req.body.trainerId;
        newBooking.traineeId = req.session.passport.user;
        newBooking.time = req.body.time;

        newBooking.save(function(err) {
            if (err) {
                res.status(500).json({});
            } else {
                res.status(200).json({});
            }                
        });
    }
}