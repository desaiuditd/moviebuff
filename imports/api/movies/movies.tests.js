/**
 * Created by udit on 4/13/17.
 */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Movies } from './movies.js';

if (Meteor.isServer) {
    describe('movies collection', function () {
        it('insert correctly', function () {
            const movieId = Movies.insert({
                "jsonId": "1",
                "title": "Gone Girl",
                "image":"images/movie1.jpg",
                "rating": "3",
                "releaseDate": "2014-02-22",
            });
            const added = Movies.find({ _id: movieId });
            const collectionName = added._getCollectionName();
            const count = added.count();

            assert.equal(collectionName, 'movies');
            assert.equal(count, 1);
        });
    });
}
