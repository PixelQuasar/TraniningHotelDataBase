"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const hotelController_1 = tslib_1.__importDefault(require("./endPoints/hotelController"));
const reviewController_1 = tslib_1.__importDefault(require("./endPoints/reviewController"));
const roomController_1 = tslib_1.__importDefault(require("./endPoints/roomController"));
const userController_1 = tslib_1.__importDefault(require("./endPoints/userController"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.mountRoutes();
    }
    mountRoutes() {
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
        this.express.use('api/hotels/hotels', hotelController_1.default);
        this.express.use('api/hotels/rooms', roomController_1.default);
        this.express.use('api/hotels/users', userController_1.default);
        this.express.use('api/hotels/review', reviewController_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map