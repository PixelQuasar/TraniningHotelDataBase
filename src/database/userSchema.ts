import { Schema, model } from "mongoose";

interface IUser {
    login: string,
    fullName: string,
    gmail?: string,
    phoneNumber?: string,
    password: string,
}

const UserSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: false
    }
})

