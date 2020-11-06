import express from 'express'
import morgan from 'morgan'
class Server {
    private app: express.Application //Tipo de dato apllication
    constructor(){ //constructor es que cuando se dice new server se invoca al constructor y crea una app e invoca al config
        this.app = express() 
        this.config()
    }
    config(){ //lo que hace es invocar al puerto
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))  // Para que muestre las url invocadas cuando la app esta en desarrollo
    }
    routes(){

    }
    start(){
        this.app.listen(this.app.get('port'), 
        () => {
            console.log(`Server on port: ${this.app.get('port')}`)
        })
    }
}
const server = new Server()//crear un objeto de la clase y aplicarle los metodos del constructor
server.start()//metodo start es para lanzar el servidor
