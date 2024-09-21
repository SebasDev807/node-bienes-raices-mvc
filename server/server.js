import express from 'express';
import userRoutes from '../routes/user.routes.js';
import db from '../config/database.js'

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
      
        this.routesPath = {
            auth: '/auth'
        }
      //Cuidado con el orden
        this.middlewares();
        this.routes();
        this.settings();
        this.dbConnect();
        this.listen();
    }

    //Routing
    routes() {
        this.app.use(this.routesPath.auth, userRoutes);
    }

    middlewares() {
        //Habulitar lectura de datos en formularios
        this.app.use(express.urlencoded({ extended: true }));
        //Carpeta publica
        this.app.use(express.static('public'));
    }

    settings() {
        // Enable template engine - pug
        this.app.set('view engine', 'pug');
        this.app.set('views', './views');

    }

    //Conexión
    async dbConnect() {
        try {
            await db.authenticate;
            console.info('Succesfully db connection')
        } catch (error) {
            console.log(error)
        }
    }

    //Escuchar en el 
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }
}

export default Server;