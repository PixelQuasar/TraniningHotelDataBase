import { Schema, model } from "mongoose";

interface IUser {
    login: string,
    fullName?: string,
    email?: string,
    phoneNumber?: string,
    password: string,
}

const UserSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

export default model<IUser>('users', UserSchema)
