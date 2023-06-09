import { Schema, model } from "mongoose"

interface IPizza {
    name: string,
    type: "burger" | "pizza" | "fries"
    time?: number,
    sizes?: Array<string>,
    price: number,
    photosURL?: Array<string>,
}

const PizzaSchema = new Schema<IPizza>({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: false
    },
    sizes: {
        type: [String],
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    photosURL: {
        type: [String],
        required: false
    },
    type: {
        type: String,
        required: true
    }
})

PizzaSchema.index({name: "text", category: "text"})

export default model<IPizza>("pizza", PizzaSchema)