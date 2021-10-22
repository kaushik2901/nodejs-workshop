"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
const logger_1 = __importDefault(require("./util/logger"));
const app = express_1.default();
db_1.setup();
app.set("port", process.env.PORT || 3001);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
//ToDo -- Add isAuthenticated to Api for token authentication and role verification at controller
// app.get("/api/facebook", passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
// * important - Add routes based on controller methods
app.use("/api/user", routes_1.default.userRouter);
app.use("/api/seller", routes_1.default.sellerRouter);
//ToDo -- Add admin controller and admin router
//ToDo -- Add 'getAllAppointmentData' in admin controller
app.use((error, req, res, next) => {
    if (error != null) {
        logger_1.default.error(error);
        res.status(error.code || 400).send({ error: error.message });
    }
    next(error);
});
exports.default = app;
//# sourceMappingURL=app.js.map