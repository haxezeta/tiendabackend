const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
    new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
    new mongoose.Schema({ nombre: String, precio: Number })
);

const Medico = mongoose.model('Medico',
    new mongoose.Schema({ nombre: String, edad: Number })
);

const Paciente = mongoose.model('Paciente',
    new mongoose.Schema({ nombre: String, edad: Number })
);

module.exports = {
    Cliente: Cliente,
    Articulo: Articulo, //CUidado con la coma
    Medico: Medico,
    Paciente: Paciente
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }