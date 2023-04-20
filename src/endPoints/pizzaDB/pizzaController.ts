import * as express from 'express';
import pizzaSchema from 'src/database/pizzaSchema';
const pizzaController = express.Router()

pizzaController.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const productArray = pizzaSchema.find({}).lean().exec()
        res.send(productArray).send(200)
    }
    catch (error) {
        console.log("PIZZACONTROLLER:", error)
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
        console.log(error)
        res.send(error).status(500)
    }
})

export default pizzaController
