import * as express from 'express';
const pizzaController = express.Router()

pizzaController.post('/', async (req: express.Request, res: express.Response) => {
    res.send(200)
})

export default pizzaController