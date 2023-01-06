const Movie = require("../Model/movieSchema");
const express = require("express");
const router = express.Router();
const { errorHandler } = require("../Middleware/errorHandler");

router.post("/createMovie", async (req, res, next) => {
  const release = new Date();
  try {
    const createMovie = await new Movie({
      movieName: req.body.movieName,
      rating: req.body.rating,
      releasedDate: release,
    });

    if (!createMovie) {
      return next(errorHandler(400, "Something went wrong"));
    } else {
      const savedMovie = await createMovie.save();
      res.status(201).json({ savedMovie });
    }
  } catch (error) {
    res.status(404).json({ message: "Oops! Try Again!" });
  }
});

router.get("/getAllMovieList", async (req, res) => {
  try {
    const getMovies = await Movie.find({});
    res.status(200).json({ getMovies, count: getMovies.length });
  } catch (error) {
    res.status(404).json({ message: "Oops! No data found" });
  }
});

module.exports = router;
