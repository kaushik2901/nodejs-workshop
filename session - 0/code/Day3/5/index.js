const express = require("express");
const Joi = require("joi");

const app = express();
const port = process.env.NODE_ENV || 3000;

// load app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/test", (req, res, next) => {
  const data = req.body;

  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    phone: Joi.string()
      .regex(/^\d{3}-\d{3}-\d{4}$/)
      .required(),
    birthday: Joi.date().max("1-1-2004").iso(),
  });

  const validationResponse = schema.validate(data);
  if (validationResponse.error) {
    res.status(422).json({
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

// establish http server connection
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
