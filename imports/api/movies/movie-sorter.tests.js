/**
 * Created by udit on 4/13/17.
 */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Movies } from './movies.js';
import { MoviesSorter } from './movie-sorter.js';

if (Meteor.isServer) {
    describe('movies methods', function () {
        beforeEach(function () {
            Movies.remove({});
            const movies = [
                {"jsonId": "1", "title":"Gone Girl","image":"images/movie1.jpg", "rating": "3", "releaseDate": "2014-02-22"},
                {"jsonId": "2", "title":"The Good Life","image":"images/movie2.jpg", "rating": "4", "releaseDate": "2014-06-24"},
                {"jsonId": "3", "title":"The Hero of Color City","image":"images/movie3.jpg", "rating": "0", "releaseDate": "2014-11-23"},
                {"jsonId": "4", "title":"Guardians of the Galaxy","image":"images/movie4.jpg", "rating": "5", "releaseDate": "2014-07-01"},
                {"jsonId": "5", "title":"The Drop","image":"images/movie5.jpg", "rating": "0", "releaseDate": "2014-12-01"},
                {"jsonId": "6", "title":"If I Stay","image":"images/movie6.jpg", "rating": "0", "releaseDate": "2015-01-01"},
                {"jsonId": "7", "title":"Guardians of the Galaxy Vol. 2","image":"images/movie7.jpg", "rating": "0", "releaseDate": "2017-05-05"},
                {"jsonId": "8", "title":"Pirates of the Caribbean: Dead Men Tell No Tales","image":"images/movie8.jpg", "rating": "0", "releaseDate": "2017-05-26"},
                {"jsonId": "9", "title":"Wonder Woman","image":"images/movie9.jpg", "rating": "0", "releaseDate": "2017-06-02"}
            ];

            movies.forEach(movie => Movies.insert(movie));
        });

        it('can sort movies by title', function () {
            const sortedMoviesCursor = MoviesSorter.sortByTitle();
            const sortedMovies = sortedMoviesCursor.fetch();

            for(let i = 0; i < sortedMovies.length - 1; i++) {
                let j = i + 1;
                assert.equal(sortedMovies[i].title <= sortedMovies[j].title, true);
            }
        });

        it('can sort movies by release date', function () {
            const sortedMoviesCursor = MoviesSorter.sortByReleaseDate();
            const sortedMovies = sortedMoviesCursor.fetch();

            for(let i = 0; i < sortedMovies.length - 1; i++) {
                let j = i + 1;
                assert.equal(sortedMovies[i].releaseDate >= sortedMovies[j].releaseDate, true);
            }
        });
    });
}
