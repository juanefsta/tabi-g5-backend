var mongoose = require('mongoose');

// Setup schema
var densidadSchema = mongoose.Schema({
    Ano: {
        type: String
    },
    Cantidad: {
        type: String
    }
});

// Export Comisaria model
var Densidad = mongoose.model('densidades', densidadSchema);
module.exports = Densidad;