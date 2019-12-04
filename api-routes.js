// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Bienvenido a TABI!'
    });
});

// Import controllers
var comisariaController = require('./controllers/comisariaController');
var centroController = require('./controllers/centrosController');
var municipioController = require('./controllers/municipioController');

// comisaria routes
router.route('/comisarias')
    .get(comisariaController.get);
router.route('/comisarias/:comisaria_id')
    .get(comisariaController.getById);

// centros routes
router.route('/centros')
    .get(centroController.get);

// municipio routes
router.route('/municipios')
    .get(municipioController.get);


// Export API routes
module.exports = router;