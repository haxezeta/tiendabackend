const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD TIENDA

router.get("/clientes", cors(), controller.readClientes); // Read All
router.get("/clientes/:id", cors(), controller.readCliente); // Read
router.delete("/clientes/:id", cors(), controller.deleteCliente); // Delete
router.put("/clientes/:id", cors(), controller.updateCliente); // Update
router.post("/clientes", cors(), controller.createCliente); // Create

router.get("/articulos", cors(), controller.readArticulos); // Read All
router.get("/articulos/:id", cors(), controller.readArticulo); // Read
router.delete("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post("/articulos", cors(), controller.createArticulo); // Create

// --------------- API REST CRUD HOSPITAL

router.get("/medicos", cors(), controller.readMedicos); // Read All
router.get("/medicos/:id", cors(), controller.readMedico); // Read
router.delete("/medicos/:id", cors(), controller.deleteMedico); // Delete
router.put("/medicos/:id", cors(), controller.updateMedico); // Update
router.post("/medicos", cors(), controller.createMedico); // Create

router.get("/pacientes", cors(), controller.readPacientes); // Read All
router.get("/pacientes/:id", cors(), controller.readPaciente); // Read
router.delete("/pacientes/:id", cors(), controller.deletePaciente); // Delete
router.put("/pacientes/:id", cors(), controller.updatePaciente); // Update
router.post("/pacientes", cors(), controller.createPaciente); // Create


module.exports = router;