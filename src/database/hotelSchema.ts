import { Schema, model } from "mongoose"

interface IHotelInfo {
    mainPhoto: string,
    description: string,
    services: Array<string>,
    photoAlbum: Array<string>
}

interface IHotel {
    name: string,
    country: string,
    city: string,
    rating: number,
    stars: number,
    info: IHotelInfo
}

const HotelInfoSchema = new Schema<IHotelInfo>({
    mainPhoto: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    photoAlbum: {
        type: [String],
        required: true
    }
})

const HotelSchema = new Schema<IHotel>({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    info: {
        type: HotelInfoSchema,
        required: true
    }

})

export default model<IHotel>("hotels", HotelSchema)
