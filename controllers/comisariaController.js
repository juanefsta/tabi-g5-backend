// Import comisaria model
Comisaria = require('./../models/comisariaModel');

// Handle index actions
exports.get = function (req, res) {
    Comisaria.find({}).exec((function (err, comisarias) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Comisarias obtenidas satisfactoriamente",
            data: comisarias
        });
    }));
};