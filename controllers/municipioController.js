// Import centro model
Municipio = require('./../models/municipioModel');

// Handle index actions
exports.get = function (req, res) {
    Municipio.find({}).exec((function (err, centros) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: centros
        });
    }));
};
exports.getByNombre = function (req, res) {
    Municipio.find({nombre:  new RegExp('\\b' +  req.params.nombre + '\\b', 'i')}).exec((function (err, centros) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: centros
        });
    }));
};