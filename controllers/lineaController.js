// Import centro model
Linea = require('./../models/lineaModel');

// Handle index actions
exports.get = function (req, res) {
    Linea.find({}).exec((function (err, lineas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "lineas obtenidas satisfactoriamente",
            data: lineas
        });
    }));
};