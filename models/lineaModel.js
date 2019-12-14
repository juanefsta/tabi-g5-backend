var mongoose = require('mongoose');

// Setup schema
var lineaSchema = mongoose.Schema({
    Sexo_Victima: {
        type: String
    },
    Edad: {
        type: String
    },
    nacionalidad_victima: {
        type: String
    },
    Municipio: {
        type: String
    },
    armas_presentes: {
        type: String
    },
    Consumo: {
        type: String
    },
    con_restriccion: {
        type: String
    },
    v_fisica   : {
        type: String
    }
});

// Export Comisaria model
var Linea = mongoose.model('linea2018', lineaSchema);
module.exports = Linea;