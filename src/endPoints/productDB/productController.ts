import * as express from 'express'
import productSchema from '../../database/productSchema'

const productController = express.Router()

productController.get('/getAllProducts', async (req: express.Request, res: express.Response) => {
    try {
        const page = req.body.page ? parseInt(req.params.page) : 1
        const array = await productSchema.find({}).lean().exec()

        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

productController.get('/getProducts', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter ? req.body.filter : {}
        const page = req.body.page ? parseInt(req.body.page) : 1

        const array = await productSchema.find(filter ? filter : {}).lean().exec()
        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    } catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

productController.post('/addProduct', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body
        if (!body.name) throw "name empty"
        if (!body.category) throw "category empty"
        if (!body.description) throw "desc empty"
        if (!body.photosURL) throw "photosURL empty"
        if (!body.amount) throw "amount empty"
        if (!body.price) throw "price empty"
        if (!body.sizes) throw "sizes empty"
        if (!body.colors) throw "colors empty"

        const content = {
            name: body.name,
            category: body.category,
            description: body.description,
            photosURL: body.photosURL,
            amount: body.amount,
            price: body.price,
            sizes: body.sizes,
            colors: body.colors,
            rating: 0
        }

        const newProduct = new productSchema(content)
        const saveResponse = await newProduct.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

hotelController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter
        if (filter) {
            const mongoResponce = await hotelSchema.deleteMany(filter)
            res.send(mongoResponce).status(200)
            return
        }
        res.send("No filter").status(404)
    } 
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

export default productController
