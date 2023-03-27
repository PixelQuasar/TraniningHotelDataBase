"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const hotelSchema_1 = tslib_1.__importDefault(require("../database/hotelSchema"));
const hotelController = express.Router();
hotelController.get('/getAllHotels', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoResponce = yield hotelSchema_1.default.find({}).lean().exec();
        res.send(mongoResponce).status(200);
    }
    catch (error) {
        console.log(error);
        res.send().status(503);
    }
}));
hotelController.post('/addHotel', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (!body.name)
            throw "name empty";
        if (!body.country)
            throw "country empty";
        if (!body.city)
            throw "city empty";
        if (!body.stars)
            throw "stars empty";
        const content = {
            name: body.name,
            country: body.country,
            city: body.city,
            rating: 0,
            stars: body.stars,
            info: {
                mainPhoto: body.info.mainPhoto ? body.info.mainPhoto : "",
                description: body.info.description ? body.info.description : "",
                services: body.info.services ? body.info.services : [],
                photoAlbum: body.info.photoAlbum ? body.info.photoAlbum : []
            }
        };
        const newHotel = new hotelSchema_1.default(content);
        const saveResponse = yield newHotel.save();
        res.send(saveResponse).status(200);
    }
    catch (error) {
        console.log(error);
        res.send(error).status(500);
    }
}));
hotelController.get('/getHotelsByFilter/:filter', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
}));
exports.default = hotelController;
//# sourceMappingURL=hotelController.js.map