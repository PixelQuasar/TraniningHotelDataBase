import { Schema, model } from "mongoose"

interface IHotel {
    name: string,
    country: string,
    city: string
}

const hotelSchema = new Schema<IHotel>({
    name: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true}
})

export default model<IHotel>("hotel", hotelSchema)
