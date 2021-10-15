const controller = require('../controllers/authentication-controller');

module.exports = (app) => {
    app.get("/api/authentication/login", controller.login);
    app.post("/api/authentication/register", controller.register);
}