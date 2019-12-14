// Import centro model
Densidad = require('./../models/densidadModel');

// Handle index actions
exports.get = function (req, res) {
    Densidad.find({}).exec((function (err, densidades) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "densidades obtenidas satisfactoriamente",
            data: densidades
        });
    }));
};