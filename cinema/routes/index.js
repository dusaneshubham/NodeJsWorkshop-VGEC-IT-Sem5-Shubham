const express = require('express');
const route = express.Router();

let movies = [
    {
        moviename: "Dhamaal 2",
        movieId: "4",
        movieReleaseDate: "20 Jan 2021",
        duration: "190 min",
        likes: 0
    },
    {
        moviename: "Dhamaal",
        movieId: "3",
        movieReleaseDate: "20 Jan 2021",
        duration: "190 min",
        likes: 0
    }
];

route.get('/', (req, res) => {
    res.send(movies);
});

route.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundMovie = movies.find((movie) => movie.movieId === id);
    res.send(foundMovie);
});

route.post('/add', (req, res) => {
    movies.push(req.body);
    res.send("Your movie added successfully");
});

route.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    movies = movies.filter((movie) => movie.movieId != id);
    res.send(`Your movie with id ${id} deleted successfully`);
});

route.patch('/update/:id', (req, res) => {
    const { id } = req.params;
    const { moviename, movieId, movieReleaseDate, duration } = req.body;
    const updatedMovie = movies.find((movie) => movie.movieId === id);

    if (moviename) {
        updatedMovie.moviename = moviename;
    }
    if (movieId) {
        updatedMovie.movieId = movieId;
    }
    if (movieReleaseDate) {
        updatedMovie.movieReleaseDate = movieReleaseDate;
    }
    if (duration) {
        updatedMovie.duration = duration;
    }

    res.send(`movie with id ${id} updated successfully`);
});

route.patch('/likes/:id', (req, res) => {
    const { id } = req.params;
    const { likes } = req.body;
    if (movies.find((movie) => movie.movieId === id)) {
        let movieUpdate = movies.find((movie) => movie.movieId === id)
        movieUpdate.likes += 1;
    }

    res.send(`movie with id ${id} updated successfully`);
})


module.exports = route;