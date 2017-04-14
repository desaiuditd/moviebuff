/**
 * Created by udit on 4/13/17.
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Movies } from './movies.js';

Meteor.methods({
    'movies.insert'(jsonId, title, image, rating, releaseDate) {
        check(jsonId, String);
        check(title, String);
        check(image, String);
        check(rating, String);
        check(releaseDate, String);

        return Movies.insert({
            jsonId,
            title,
            image,
            rating,
            releaseDate
        });
    },
    'movies.updateRating'(movieId, rating) {
        check(movieId, String);
        check(rating, Number);

        return Movies.update({_id: movieId}, {$set: {rating: rating}});
    }
});
