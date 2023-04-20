import * as express from 'express';
import pizzaSchema from 'src/database/pizzaSchema';
const pizzaController = express.Router()

pizzaController.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const productArray = pizzaSchema.find({}).lean().exec()
        res.send(productArray).send(200)
    }
    catch (error) {
        console.log("PIZZACONTROLLER - INDEX:", error)
        res.send(error).status(503)
    }
})

pizzaController.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const productArray = pizzaSchema.find({_id: req.params.id}).lean().exec()
        res.send(productArray).send(200)
    }
    catch (error) {
        console.log("PIZZACONTROLLER - /:ID:", error)
        res.send(error).status(503)
    }
})

pizzaController.get('/category/:type', async (req: express.Request, res: express.Response) => {
    try {
        const productArray = pizzaSchema.find({type: req.params.type}).lean().exec()
        res.send(productArray).send(200)
    }
    catch (error) {
        console.log("PIZZACONTROLLER - /:TYPE:", error)
        res.send(error).status(503)
    }
})

pizzaController.post('/addProduct', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body
        const newProduct = new pizzaSchema(body)
        const saveResponse = await newProduct.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log("PIZZACONTROLLER - ADDPRODUCT:", error)
        res.send(error).status(500)
    }
})

pizzaController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter
        if (filter) {
            const mongoResponce = await pizzaSchema.deleteMany(filter)
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

export default pizzaController
