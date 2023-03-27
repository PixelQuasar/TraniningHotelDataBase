import { Schema, model } from "mongoose";

interface IReview {
    text: string,
    authorId: string,
    hotelId: string,
    score: number,
    dateCreated: Date
}

const ReviewSChema = new Schema<IReview>({
    text: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true,
    },
    hotelId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    }
})

export default model<IReview>('reviews', ReviewSChema)