/**
 * Created by udit on 4/13/17.
 */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Movies } from './movies.js';
import './methods.js';

if (Meteor.isServer) {
    describe('movies methods', function () {
        beforeEach(function () {
            Movies.remove({});
        });

        it('can add a new movie', function () {
            const addLink = Meteor.server.method_handlers['movies.insert'];

            addLink.apply({}, ['1', 'Gone Girl', 'images/movie1.jpg', '3', '2014-02-22']);

            assert.equal(Movies.find().count(), 1);
        });

        it('can update movie rating', function () {

            const movieId = Movies.insert({
                "jsonId": "1",
                "title": "Gone Girl",
                "image":"images/movie1.jpg",
                "rating": "0",
                "releaseDate": "2014-02-22",
            });

            let added = Movies.findOne({ _id: movieId });

            assert.equal(added.rating, '0');

            const updateRating = Meteor.server.method_handlers['movies.updateRating'];

            updateRating.apply({}, [movieId, 4]);

            added = Movies.findOne({ _id: movieId });

            assert.equal(added.rating, '4');
        });
    });
}
