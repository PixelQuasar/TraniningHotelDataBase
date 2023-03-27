import bodyParser from 'body-parser';
import express from 'express'
import hotelController from './endPoints/hotelController';
import reviewController from './endPoints/reviewController';
import roomController from './endPoints/roomController';
import userController from './endPoints/userController';

import hoteSchema from './database/hotelSchema';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))

    this.express.use('api/hotels/hotels', hotelController)
    this.express.use('api/hotels/rooms', roomController)
    this.express.use('api/hotels/users', userController)
    this.express.use('api/hotels/review', reviewController)
  }
}

export default new App().express