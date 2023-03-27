import bodyParser from 'body-parser';
import express from 'express'
import userController from './endPoints/hotelController';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))

    this.express.use('/operators', userController)
  }
}

export default new App().express