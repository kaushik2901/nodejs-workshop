const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.NODE_ENV || 3000;
const tokenKey = process.env.TOKEN_KEY || "some-random-generated-hash";
const databaseURI =
    process.env.DATABASE_URI || "mongodb://localhost:27017/user_authentication";

mongoose.connect(databaseURI);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mongoose
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Request Validations
const registerUserRequestSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
});

const loginUserRequestSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
});

const requestBodySchemaValidator = (schema) => (req, res, next) => {
    const response = schema.validate(req.body);
    if (response.error) {
        res.status(400).json(response.error);
    } else {
        next();
    }
};

app.post(
    "/register",
    requestBodySchemaValidator(registerUserRequestSchema),
    async (req, res, next) => {
        const { name, email, password } = req.body;

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).json({
                error: "User Already Exist. Please Login",
            });
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign({ user_id: user._id, email }, tokenKey, {
            expiresIn: "2h",
        });

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: token
        });
    }
);

app.post("/login", requestBodySchemaValidator(loginUserRequestSchema), async (req, res) => {
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            tokenKey,
            {
                expiresIn: "2h",
            }
        );

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: token
        });
    } else {
        res.status(400).json({
            error: "Invalid Credentials",
        });
    }
});

const verifyAuthenticated = (req, res, next) => {
    const token = req.headers["token"];

    if (!token) {
        return res.status(403).json({
            error: "A token is required for authentication"
        });
    }

    try {
        const user = jwt.verify(token, tokenKey);
        req.user = user;
    } catch (err) {
        return res.status(401).json({
            error: "Invalid Token"
        });
    }
    return next();
};

app.get("/", verifyAuthenticated, (req, res) => {
    res.json({
        restrictedData: true
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: err.message,
    });
});

// establish http server connection
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
