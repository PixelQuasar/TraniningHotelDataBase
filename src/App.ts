import bodyParser from 'body-parser';
import express from 'express'
import hotelController from './endPoints/hotelDB/hotelController';
import reviewController from './endPoints/hotelDB/reviewController';
import roomController from './endPoints/hotelDB/roomController';
import userController from './endPoints/hotelDB/userController';
import productController from './endPoints/productDB/productController';
import cors from 'cors'
import pizzaController from './endPoints/pizzaDB/pizzaController';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    
    this.express.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      //res.contentType('application/json')
      next();
    });
    this.express.use(cors())

    this.express.use('/api/hotelDB/hotels', hotelController)
    this.express.use('/api/hotelDB/rooms', roomController)
    this.express.use('/api/hotelDB/users', userController)
    this.express.use('/api/hotelDB/review', reviewController)

    this.express.use('/api/shopDB/products', productController)

    this.express.use('/api/pizzaDB/products', pizzaController)
    
  }
}

export default new App().express