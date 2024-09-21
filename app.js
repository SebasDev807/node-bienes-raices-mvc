import express from 'express';
import userRoutes from './routes/user.routes.js';
import db from './config/database.js';

import dotenv from "dotenv";
dotenv.config();

// crete  app
const app = express();
//Habulitar lectura de datos en formularios
app.use(express.urlencoded({ extended: true }));
//Routing
app.use('/auth', userRoutes);

const port = process.env.PORT || 3000;


//Conexión a la base de datos
try {
    await db.authenticate;
    console.info('Conexión a db exitosa')
} catch {
    console.log(error);
}


//middlewares

//Carpeta pubica
app.use(express.static('public'));

// Enable template engine - pug
app.set('view engine', 'pug');
app.set('views', './views');


// Definir un puerto y arrancar el proyecto
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

