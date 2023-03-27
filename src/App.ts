import bodyParser from 'body-parser';
import express from 'express'
import hotelController from './endPoints/hotelController';
import reviewController from './endPoints/reviewController';
import roomController from './endPoints/roomController';
import userController from './endPoints/userController';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))

    this.express.use('/hotels', hotelController)
    this.express.use('/rooms', roomController)
    this.express.use('/users', userController)
    this.express.use('/review', reviewController)
  }
}

export default new App().express