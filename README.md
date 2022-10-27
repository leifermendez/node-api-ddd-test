# Aplicación con NodeJS, Express, TypeScript, MongoDB, MySQL y PostgreSQL

### Aplicación orientada al negocio, Arquitectura por capas

## Instalación

1. Necesitas [Node](https://nodejs.org/) v12+ para ejecutar la app.
2. Instala las dependencias con el comando:
```sh
npm i
```
3. Configura las variables de entorno de tu base de datos
- crea un archivo .env en la raiz del proyecto
- ### Sí utilizas MongoDB: agrega en el archivo `DB_MONGO_URI` con la uri de tu base de datos
- ### Sí utilizas MySQL: agrega las propiedades de conexión en el siguiente orden
- `DB_MYSQL_HOST` Url de MySQL
- `DB_MYSQL_PORT` Puerto de conexión
- `DB_MYSQL_USER` Usuario de base de datos
- `DB_MYSQL_PASSWORD` Password de base de datos
- `DB_MYSQL_DATABASE` Nombre del esquema de base de datos
- Opcionalmente puedes agregar un  puerto de ejecución para tu app, solo debes agregar `PORT` con el número del puerto que desees

Ejemplo: 
```
PORT=3000
DB_MONGO_URI=mongodb://localhost:27017/prueba
```

ó

```
DB_MYSQL_HOST=localhost
DB_MYSQL_PORT=3306
DB_MYSQL_USER=root
DB_MYSQL_PASSWORD=1234
DB_MYSQL_DATABASE=prueba
```

4. Ejecuta la aplicación con el comando:

```sh
npm run dev
```



