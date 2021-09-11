const express = require("express");
const Joi = require("joi");

const app = express();
const port = process.env.NODE_ENV || 3000;

// load app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    birthday: Joi.date().max("1-1-2004").iso(),
    addresses: Joi.array().items(Joi.object().keys({
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        street: Joi.string().required(),
        state: Joi.string().required(),
        pinCode: Joi.string().required()
    })).min(1).required()
});

app.post("/test", (req, res, next) => {
    const data = req.body;

    const validationResponse = schema.validate(data);
    if (validationResponse.error) {
        res.status(400).json({
            status: "error",
            message: "Invalid request data",
            data: validationResponse.error,
        });
    } else {
        res.json({
            status: "success",
            message: "User created successfully",
        });
    }
});

// This can be imported from separate file
const requestBodySchemaValidator = (schema) => (req, res, next) => {
    const response = schema.validate(req. body);
    if(response.error) {
        res.status(400).json(response.error)
    } else {
        next();
    }
}

app.post("/test-with-middleware", requestBodySchemaValidator(schema), (req, res, next) => {
    const data = req.body;
    console.log("data", data);
    res.json({
        status: "success",
        message: "User created successfully",
    });
});

// establish http server connection
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
