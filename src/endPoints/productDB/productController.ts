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

productController.post('/addProduct', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body
        if (!body.name) throw "name empty"
        if (!body.country) throw "country empty"
        if (!body.city) throw "city empty"
        if (!body.stars) throw "stars empty"

        const content = {
            name: body.name,
            country: body.country,
            city: body.city,
            rating: 0,
            stars: body.stars,
            info: {
                mainPhoto: body.mainPhoto ? body.mainPhoto : "",
                description: body.description ? body.description : "",
                services: body.services ? body.services : [],
                photoAlbum: body.photoAlbum ? body.photoAlbum : []
            }
        }
        const newHotel = new productSchema(content)
        const saveResponse = await newHotel.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

export default productController
