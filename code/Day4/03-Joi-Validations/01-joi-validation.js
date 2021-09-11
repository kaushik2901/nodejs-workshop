const Joi = require('joi')

const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    phone: Joi.string()
        .regex(/^\d{3}-\d{3}-\d{4}$/)
        .required(),
    birthday: Joi.date().max("1-1-2004").iso(),
});

const data = {
    email: "test@email.com",
    phone: "123-123-1234",
    birthday: new Date(2003, 01, 01)
}

const validationResponse = schema.validate(data);

if(validationResponse.error) {
    console.log(validationResponse.error);
} else {
    console.log("Data is valid");
}