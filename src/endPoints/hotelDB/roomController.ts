import * as express from 'express'
import roomSchema from '../../database/roomSchema'

const roomController = express.Router()

roomController.get('/getAllRooms', async (req: express.Request, res: express.Response) => {
    try {
        const page = req.body.page ? parseInt(req.params.page) : 1
        const array = await roomSchema.find({}).lean().exec()

        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

roomController.get('/getRooms', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter ? req.body.filter : {}
        const page = req.body.page ? parseInt(req.body.page) : 1

        const array = await roomSchema.find(filter ? filter : {}).lean().exec()
        const pageNumber = Math.ceil(array.length / 20)
        res.send({ pages: pageNumber, payload: array.slice((page - 1) * 20, 20) }).status(200)
    } catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

roomController.post('/addRoom', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body

        const content = {
            hotelId: body.hotelId,
            price: body.price,
            name: body.name,
            description: body.description,
            type: body.type,
            photosURL: body.photosURL,
            roomAmount: body.roomAmount,
            peopleCapacity: body.peopleCapacity,
            beds: {
                oneDoubleBed: body.oneDoubleBed,
                twoSingleBeds: body.twoSingleBeds,
                sofaBed: body.sofaBed
            }
        }
        const newHotel = new roomSchema(content)
        const saveResponse = await newHotel.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

roomController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter
        if (filter) {
            const mongoResponce = await roomSchema.deleteMany(filter).lean().exec()
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

export default roomController