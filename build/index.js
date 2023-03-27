"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const App_1 = tslib_1.__importDefault(require("./App"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.mongoURL);
App_1.default.listen(process.env.PORT, () => {
    return console.log(`server is listening on ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map