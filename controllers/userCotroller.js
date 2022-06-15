const {getConnection} = require('../config/db.config');

exports.UseHome = async (req, res) => {
    const connetion = await getConnection();
    const result = await connetion.query('SELECT vuelo.capacidad, vuelo.modeloAvion, vuelo.numeroVuelo, compania.nombre_compania, compania.direccion_compania, compania.telefono_compania, origen.aeropuerto_origen, origen.ciudad_orgien, destino.aeropuerto_destino, destino.ciudad_destino from vuelo INNER JOIN compania on vuelo._id_compania = compania._id_compania INNER JOIN itinerario on vuelo._id_itinerario = itinerario._id_itinerario INNER JOIN origen on origen._id_origen = itinerario._id_origen INNER JOIN destino on destino._id_destino = itinerario._id_origen');
    res.send(result);
}
exports.UseLogin = async (req, res) => {
    const connetion = await getConnection();
    // const admin = await connetion.query("SELECT * FROM `usuarios` WHERE `name` = 'admin' and `password` = 123");
    const user = await connetion.query("SELECT * FROM `usuarios` WHERE `role` = 2;");
    res.send(user);
}


