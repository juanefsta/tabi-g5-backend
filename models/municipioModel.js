var mongoose = require('mongoose');

// Setup schema
var municipioSchema = mongoose.Schema({
    Nombre: {
        type: String
    },
    CantCentros: {
        type: Number
    }
});

// Export municipio model
var Centro =  mongoose.model('municipios', municipioSchema);

module.exports = Centro;