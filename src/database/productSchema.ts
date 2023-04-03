import { Schema, model } from "mongoose";

interface IProduct {
    name: string,
    category: string,
    description: string,
    photosURL: Array<String>,
    amount: number,
    price: number,
    sizes: Array<String>,
    colors: Array<String>,
    rating: number
}

const ProductSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    photosURL: {
        type: [String],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sizes: {
        type: [String],
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

ProductSchema.index({name: "text", category: "text"})

export default model<IProduct>('reviews', ProductSchema)