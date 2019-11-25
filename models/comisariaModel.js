var mongoose = require('mongoose');

// Setup schema
var comisariaSchema = mongoose.Schema({
    Partido: {
        type: String
    }
});

// Export Comisaria model
var Comisaria = module.exports = mongoose.model('comisaria', comisariaSchema);
module.exports.get = function (callback, limit) {
    Comisaria.find(callback).limit(limit);
}