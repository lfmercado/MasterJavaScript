'use strict'

var Project = require('../models/project');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy Home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion del test del controlador'
        });
    },

    //Metodo Para Guardar Registros en la base de datos
    saveProject: function (req, res) {

        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;


        project.save((err, projectStored) => {
            if (err) return res.status(500).send({message: 'Error al guardar documento'});
            if (!projectStored) return res.status(404).send({message: 'No se ha podido guardar el registro'});

            return res.status(200).send({
                project: projectStored
            });
        });
    },


    //Metodo para traer los datos de la base de datos
    getProject: function (req, res) {
        var projectId = req.params.id;
         if (projectId == null) return res.status(404).send({message: 'El proyecto no existe'});

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({message: 'Error al encontrar el projecto'});
            if (!project) return res.status(404).send({message: 'El proyecto no existe'});

            return res.status(200).send({
                project
            })
        });

    },

    //Metodo para obtener todos los documentos de la base de datos
    getProjects: function (req, res) {
        //Metodo sort es para ordenar el json segun el parametro que se ingrese en este caso el año, si colocamos "-year" seria de mayor a menor
        Project.find({}).sort('year').exec((err, projects) => {
            if (err) return res.status(500).send({message: 'Error al devolver los projectos'});
            if (!projects) return res.status(404).send({message: 'Error no existen projectos para mostrar'});

            return res.status(200).send({
                projects
            })
        });
    },

    //Metodo para actualizar los datos de los documentos en la base de datos
    updateProject: function (req, res) {
        var projectId = req.params.id;
        //if(projectId==null) return res.status(404).send({message:'El proyecto no existe'});
        var update = req.body;
                                                   //por medio de este parametro le estamos indicando que nos devuelva el documento que ha modificado
                                                 //con los campos nuevos que se han ingresado
        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdate) => {
            if (err) return res.status(500).send({message: 'Error al devolver los projectos'});
            if (!projectUpdate) return res.status(404).send({message: 'Error no se ha podido actualizar o no existe el projecto'});

            return res.status(200).send({
                message: 'Se ha actualizado el registro con exito',
                projectUpdate: projectUpdate
            })
        });

    },

    //Metodo para eliminar el registro de la base de datos
    deleteProject: function (req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDelete) => {
            if (err) return res.status(500).send({message: 'Error al devolver los projectos'});
            if (!projectDelete) return res.status(404).send({message: 'No se puede eliminar el registro'})

            return res.status(200).send({
                message: 'Se ha eliminado el registro satisfatoriamente',
                projectDelete: projectDelete
            })
        });
    },

    //Subir imagenes
    uploadImages: function (req, res) {
        var projectId = req.params.id;
        var fileName = "imagen no subida";

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            console.log(projectId);
            console.log(fileName);

            Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdate) => {
                if (err) return res.status(500).send({message: 'La imagen no se ha subido'});
                if (!projectUpdate) return res.status(404).send({message: 'La imagen o el projecto no existen'});

                return res.status(200).send({
                    message: 'Se ha subido la imagen con exito',
                    project: projectUpdate
                });
            });

        } else {
            return res.status(500).send({
                message: 'No se ha subido la imagen',
                file: fileName
            })
        }
    }

}

module.exports = controller;