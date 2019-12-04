// Import centro model
Centro = require('./../models/centroModel');

// Handle index actions
exports.get = function (req, res) {
    Centro.find({}).exec((function (err, centros) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "centros obtenidas satisfactoriamente",
            data: centros
        });
    }));
};