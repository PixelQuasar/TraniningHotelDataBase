import * as express from 'express'
import roomSchema from 'src/database/roomSchema'

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

})

roomController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {

})

export default roomController