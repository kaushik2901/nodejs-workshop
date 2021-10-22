import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import router from "./routes";
import * as passportConfig from "./config/passport";
import { setup, userAppointment } from "./db";
import logger from "./util/logger";

const app = express();
setup();

app.set("port", process.env.PORT || 3001);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

//ToDo -- Add isAuthenticated to Api for token authentication and role verification at controller
// app.get("/api/facebook", passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);

// * important - Add routes based on controller methods
app.get("/", (req, res) => {
    res.json({
        "test": "Test"
    })
})
app.use("/api/user", router.userRouter);
app.use("/api/seller", router.sellerRouter);
//ToDo -- Add admin controller and admin router
//ToDo -- Add 'getAllAppointmentData' in admin controller
app.use((error: any, req: any, res: any, next: any) => {
    if (error != null) {
        logger.error(error);
        res.status(error.code || 400).send({ error: error.message });
    }
   
    next(error);
});

export default app;
