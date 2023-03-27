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
    type: string,
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

})

export default model<IRoom>('rooms', RoomSchema)