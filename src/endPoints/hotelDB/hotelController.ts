import * as express from 'express'
import hotelSchema from '../database/hotelSchema'

const hotelController = express.Router()

hotelController.get('/getAllHotels', async (req: express.Request, res: express.Response) => {
    try {
        const page = req.body.page ? parseInt(req.params.page) : 1
        const array = await hotelSchema.find({}).lean().exec()

        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

hotelController.get('/getHotels', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter ? req.body.filter : {}
        const page = req.body.page ? parseInt(req.body.page) : 1

        const array = await hotelSchema.find(filter ? filter : {}).lean().exec()
        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    } catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

hotelController.post('/addHotel', async (req: express.Request, res: express.Response) => {
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
        const newHotel = new hotelSchema(content)
        const saveResponse = await newHotel.save()
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

export default hotelController
