import { Schema, model } from "mongoose";

interface IBeds {
    oneDoubleBed: boolean,
    twoSingleBeds: boolean,
    sofaBed: boolean
}

interface IRoom {
    hotelId: string,
    price: number,
    name: string,
    description: string,
    type: string,
    photosURL: Array<String>
    roomAmount: number,
    peopleCapacity: number,
    beds: IBeds
}

const BedsSchema = new Schema<IBeds>({
    oneDoubleBed: {
        type: Boolean,
        required: true
    },
    twoSingleBeds: {
        type: Boolean,
        required: true
    },
    sofaBed: {
        type: Boolean,
        required: true
    }
})

const RoomSchema = new Schema<IRoom>({
    hotelId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    photosURL: {
        type: [String],
        required: true
    },
    roomAmount: {
        type: Number,
        required: true
    },
    peopleCapacity: {
        type: Number,
        required: true
    },
    beds: {
        type: BedsSchema,
        required: true
    }
})

RoomSchema.index({name: "text", description: "text"})

export default model<IRoom>('rooms', RoomSchema)