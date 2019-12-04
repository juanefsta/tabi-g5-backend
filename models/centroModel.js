var mongoose = require('mongoose');

// Setup schema
var centroSchema = mongoose.Schema({
    Nombre: {
        type: String
    },
    Categoria: {
        type: String
    },
    Subcategoria: {
        type: String
    },
    Municipio   : {
        type: String
    }
});

// Export Comisaria model
var Centro =  module.exports = mongoose.model('centros', centroSchema);
module.exports.get = function (callback, limit) {
    Centro.find(callback).limit(limit);
}