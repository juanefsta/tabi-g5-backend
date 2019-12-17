// Import centro model
Municipio = require('./../models/municipioModel');

// Handle index actions
exports.get = function (req, res) {
    Municipio.find({}).sort( { nombre: 1 } ).exec((function (err, municipios) {
    // Municipio.aggregate([{
    //     '$project' : {
    //         _id: false,
    //         name: "$nombre",
    //         value: "$cantCentros"
    //       }
    // }]).sort( { nombre: 1 } ).exec((function (err, municipios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: municipios
        });
    }));
};
exports.getByNombre = function (req, res) {
    Municipio.find({ nombre: new RegExp('\\b' + req.params.nombre + '\\b', 'i') }).exec((function (err, municipios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: municipios
        });
    }));
};

exports.getByRangoCentros = function (req, res) {
    let desde = req.params.desde;
    let hasta = req.params.desde
    console.log(desde);
    console.log(hasta);
    Municipio.find({ cantCentros: { $gt: desde, $lt: hasta } }).exec((function (err, municipios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: municipios
        });
    }));
};

exports.getSinCentros = function (req, res) {
    Municipio.find({ cantCentros: 0 }).exec((function (err, municipios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "municipios obtenidas satisfactoriamente",
            data: municipios
        });
    }));
};