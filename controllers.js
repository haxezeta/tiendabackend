const { Cliente, Articulo, Medico, Paciente } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, precio: req.body.precio } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------- MEDICOS

exports.readMedicos = (req, res) =>
    Medico.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readMedico = (req, res) =>
    Medico.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteMedico = (req, res) =>
    Medico.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateMedico = (req, res) =>
    Medico.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, edad: req.body.edad } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createMedico = (req, res) =>
    new Medico({ nombre: req.body.nombre, edad: req.body.edad })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


// ------- PACIENTES

exports.readPacientes = (req, res) =>
    Paciente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readPaciente = (req, res) =>
    Paciente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deletePaciente = (req, res) =>
    Paciente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updatePaciente = (req, res) =>
    Paciente.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, edad: req.body.edad } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createPaciente = (req, res) =>
    new Paciente({ nombre: req.body.nombre, edad: req.body.edad })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });