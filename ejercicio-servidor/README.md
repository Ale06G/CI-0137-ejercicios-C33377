# Ejercicio — Servidor con Express

## Descripción

Servidor hecho con Node.js y Express 5 que sirve el currículum. El HTML se genera con el motor de plantillas EJS a partir de datos que viven en un módulo de JavaScript, sin base de datos y sin frameworks de frontend. Incluye un formulario de contacto que se envía por POST.

## Tecnologías

- Node.js (se usó la v24)
- Express 5
- EJS

## Instalación y ejecución

Desde la carpeta ejercicio-servidor:

```bash
npm install
npm start
```

El currículum se ve en http://localhost:3000.

Para desarrollo, con recarga automática usando node --watch:

```bash
npm run dev
```

Se puede cambiar el puerto con la variable de entorno PORT, por ejemplo PORT=4000 npm start.

## Rutas

- GET /: muestra el currículum renderizado con los datos del módulo data.
- POST /contacto: recibe el formulario con req.body y responde con una página de gracias.
- Cualquier otra ruta: responde con una página 404 propia.

## Decisiones de diseño

- Los archivos estáticos se sirven desde public/ con express.static.
- Los datos del currículum son los mismos del ejercicio de JavaScript, pero ahora se renderizan en el servidor con EJS. En el navegador solo queda el JavaScript del cambio de tema claro/oscuro.
- Los datos del formulario se leen con express.urlencoded, que ya viene incluido en Express 5, así que no hace falta body-parser.
- El formulario solo imprime los datos recibidos en la consola del servidor, ya que el ejercicio no usa base de datos.
- node_modules está en el .gitignore y no se sube al repositorio.

## Validación

- El servidor arranca con npm start sin errores y el currículum se ve en http://localhost:3000.
- Al enviar el formulario de contacto, el servidor imprime los datos en la terminal y muestra la página de agradecimiento.
- Al visitar una dirección inexistente, por ejemplo http://localhost:3000/no-existe, se muestra la página 404.
