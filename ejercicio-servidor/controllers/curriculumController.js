import curriculum from '../data/curriculum.js';

export function mostrarCurriculum(req, res) {
  res.render('index', curriculum);
}

export function recibirContacto(req, res) {
  const { nombre, correo, mensaje } = req.body;
  console.log('Mensaje de contacto recibido:', { nombre, correo, mensaje });
  res.render('gracias', { nombre });
}

export function noEncontrado(req, res) {
  res.status(404).render('404', { ruta: req.originalUrl });
}
