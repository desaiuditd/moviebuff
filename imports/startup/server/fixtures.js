// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Movies } from '../../api/movies/movies.js';

Meteor.startup(() => {
  // if the Movies collection is empty
  if (Movies.find().count() === 0) {

    const moviebuffMovies = JSON.parse(Assets.getText('movies.json'));

    moviebuffMovies.forEach(movie => Movies.insert({
        jsonId: movie.$id,
        title: movie.title,
        image: movie.image,
        rating: movie.rating,
        releaseDate: movie.releaseDate,
    }));
  }
});
