# Ejercicio 01 — Ambiente de desarrollo local

## Servidor web seleccionado

Caddy

## Razón de elección

Se seleccionó Caddy porque es un servidor web sencillo de configurar y cuenta con una configuración fácil de leer con el archivo Caddyfile. Además, permite servir archivos estáticos de manera sencilla y ofrece la gestión automática de HTTPS y certificados TLS, lo que facilita la configuración de sitios web seguros.

## Puerto utilizado

Puerto 80.

## URL

http://localhost/

## Configuración

Se instaló Caddy en Windows y se configuró utilizando un archivo Caddyfile ubicado dentro de la carpeta ejercicio-01.

La configuración utilizada indica que Caddy debe servir los archivos de la carpeta actual con HTTP en el puerto 80. De esta forma, el repositorio local funciona como la ubicación de los archivos que serán servidos por el servidor web.

La configuración utilizada fue:

```caddyfile
http://localhost {
    root * .
    file_server
}