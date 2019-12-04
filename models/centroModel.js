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
var Centro = mongoose.model('centros', centroSchema);
module.exports = Centro;