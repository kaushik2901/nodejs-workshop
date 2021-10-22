const controller = require("../controllers/movies-controller");

module.exports = (app) => {
    app.get("/api/movies", controller.getAllMovies);
    app.get("/api/movies/:id", controller.getSingleMovie);
    app.post("/api/movies", controller.createMovie);
    app.put("/api/movies/:id", controller.updateMovie);
    app.put("/api/movies/:id/increment-like", controller.incrementLike);
    app.delete("/api/movies/:id", controller.deleteMovie);
};
