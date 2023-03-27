"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HotelInfoSchema = new mongoose_1.Schema({
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
});
const HotelSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)("hotels", HotelSchema);
//# sourceMappingURL=hotelSchema.js.map