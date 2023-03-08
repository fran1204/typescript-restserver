

import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from "cors";
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };
    

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares();
        //Definir mis rutas
        this.routes();
    }

    //TODO: Conectar DB MYSQL
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');

        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // configurar el CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta Publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}


export default Server;