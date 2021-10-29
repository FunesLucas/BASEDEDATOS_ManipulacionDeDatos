const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


//Rutas exigidas para la creación del CRUD
router.get('/moviesAdd', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/moviesEdit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);
router.get('/moviesDelete/:id', moviesController.delete);
router.post('/moviesDelete/:id', moviesController.destroy);

module.exports = router;