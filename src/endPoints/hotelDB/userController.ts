import * as express from 'express'
import userSchema from '../../database/userSchema'

const userController = express.Router()

userController.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const mongoResponse = await userSchema.find().lean().exec()

        res.send(mongoResponse).status(200)
    }
    catch (error) {
        res.send(error).status(500)
    }
})

userController.get('/:userId', async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.userId
        const mongoResponse = await userSchema.findOne({_id: id}).lean().exec()

        res.send(mongoResponse).status(200)
    }
    catch (error) {
        res.send(error).status(500)
    }
})

userController.post('/register', async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body
        console.log(body.photosURL)
        if (body.password != body.tryPassword) throw "Password and trypassword are not the same"

        const content = {
            login: body.login,
            password: body.password,
            email: body.email,
            phoneNumber: body.phoneHumber,
            fullName: body.fullName
        }
        const newUser = new userSchema(content)
        console.log(newUser)
        const saveResponse = await newUser.save()
        console.log(saveResponse)
        res.send(saveResponse).status(200)
    }
    catch (error) {
        console.log(error)
        res.send(error).status(500)
    }
})

userController.post("/login", async (req: express.Request, res: express.Response) => {
    const password = req.body.password
    const login = req.body.login
    try{
        const mongoResponse = await userSchema.find({"login": login, "password": password}).lean().exec()
        if (mongoResponse.length == 0) throw "Error: incorrect login or password"
        console.log(mongoResponse)
        res.status(200).send(mongoResponse)
    }
    catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
})

userController.post('/deleteByFilter', async (req: express.Request, res: express.Response) => {
    try {
        const filter = req.body.filter
        if (filter) {
            const mongoResponce = await userSchema.deleteMany(filter)
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

export default userController