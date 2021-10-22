const mongoose = require('mongoose');
const Movie = require('../models/Movie');

module.exports.getAllMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

module.exports.getSingleMovie = async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    res.json(movie);
}

module.exports.createMovie = async (req, res) => {
    const { title, imageURL, description, duration } = req.body;
    if (!title || !imageURL || !description || !duration) {
        return res.status(400).json({
            message: "All inputs Required",
        });
    }

    const movie = new Movie({
        title,
        imageURL,
        description,
        duration,
    })

    await movie.save();

    res.json(movie);
}

module.exports.updateMovie = async (req, res) => {
    const id = req.params.id;
    const { title, imageURL, description, duration } = req.body;

    if (!title && !imageURL && !description && !duration) {
        return res.status(400).json({
            message: "At least one parameter required to update movie",
        });
    }

    const movie = await Movie.findById(id);
    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    movie.title = title ?? movie.title;
    movie.imageURL = imageURL ?? movie.imageURL;
    movie.description = description ?? movie.description;
    movie.duration = duration ?? movie.duration;

    await movie.save();

    res.json(movie);
}

module.exports.incrementLike = async (req, res) => {
    const id = req.params.id;

    const movie = await Movie.findById(id);
    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    movie.likes = movie.likes + 1;
    await movie.save();

    res.json(movie);
}

module.exports.deleteMovie = async (req, res) => {
    const id = req.params.id;

    const movie = await Movie.findById(id);
    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    await movie.remove();
    res.status(204).send();
}