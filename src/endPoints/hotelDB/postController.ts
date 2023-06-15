import * as express from 'express'
import postSchema from '../../database/postSchema'

const postController = express.Router()

postController.post('/createPost', async (req: express.Request, res: express.Response) => {
    try {
        const {content, authorId, images}

        const data = {
            content: string,
            images: Array<string>,
            views: number,
            likes: number,
            authorId: string,
            active: boolean,
        }
        const newHotel = new hotelSchema(data)
        const saveResponse = await newHotel.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

export default postController