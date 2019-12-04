// Import comisaria model
Comisaria = require('./../models/comisariaModel');

// Handle index actions
exports.get = function (req, res) {
    console.log('Comisarias');
    Comisaria.get(function (err, comisarias) {
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
    });
};

// Handle view comisaria info
exports.getById = function (req, res) {
    Comisaria.findById(req.params.comisaria_id, function (err, comisaria) {
        if (err)
            res.send(err);
        res.json({
            message: 'Comisaria details loading..',
            data: comisaria
        });
    });
};