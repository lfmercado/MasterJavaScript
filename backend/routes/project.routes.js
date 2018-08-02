'use strict'

var express = require('express');
var ProjectController = require('../controllers/project.controller');

var router = express.Router();

//Creamos un middleware
var multipar = require('connect-multiparty');
var multiparMiddleware = multipar({uploadDir : './uploads'});


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/update/:id', ProjectController.updateProject);
router.delete('/project_delete/:id', ProjectController.deleteProject);
router.post('/upload_image/:id', multiparMiddleware, ProjectController.uploadImages);

module.exports = router;