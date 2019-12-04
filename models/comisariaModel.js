var mongoose = require('mongoose');

// Setup schema
var comisariaSchema = mongoose.Schema({
    Partido: {
        type: String
    }
});

// Export Comisaria model
var Comisaria = mongoose.model('comisaria', comisariaSchema);
module.exports = Comisaria;