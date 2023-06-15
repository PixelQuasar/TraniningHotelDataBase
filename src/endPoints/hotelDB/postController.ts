import * as express from 'express'
import postSchema from '../../database/postSchema'

const postController = express.Router()

postController.post('/createPost', async (req: express.Request, res: express.Response) => {
    try {
        const {content, authorId, images} = req.body

        const data = {
            content: content,
            images: images,
            views: 0,
            likes: 0,
            authorId: authorId,
            active: true,
        }
        const newPost = new postSchema(data)
        const saveResponse = await newPost.save()
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

postController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter
        if (filter) {
            const mongoResponce = await postSchema.deleteMany(filter)
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


export default postController