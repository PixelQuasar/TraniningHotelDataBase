import * as express from 'express'
import hotelSchema from 'src/database/hotelSchema'

const hotelController = express.Router()

hotelController.get('/getAllHotels', async (req: express.Request, res: express.Response) => {
    try {
        const mongoResponce = hotelSchema.find( {} ).lean().exec()
        res.send(mongoResponce).status(200)
    } 
    catch (error) {
        console.log(error)
        res.send().status(503)
    } 
})

hotelController.post('/addHotel', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body
        if (!body.name) throw "name empty"
        if (!body.country) throw "country empty"
        if (!body.city) throw "city empty"
        const content = {
            name: body.name ? body.name : ,
            country: nody.name ? body.name,
            city: string,
            rating: number,
            stars: number,
            info: {
                mainPhoto: string,
                description: string,
                services: Array<string>,
                photoAlbum: Array<string>
            }
        }
        const newHotel = new hotelSchema(req.body)
    }
    catch (error) {
        console.log(error)
        res.send().status()
    }
})

export default hotelController