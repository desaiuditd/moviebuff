// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Movies } from '../movies.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('movies publications', function () {
  beforeEach(function () {
    Movies.remove({});
    Movies.insert({
      "jsonId": "1",
      "title":"Gone Girl",
      "image":"images/movie1.jpg",
      "rating": "3",
      "releaseDate": "2014-02-22"
    });
  });

  describe('movies.all', function () {
    it('sends all movies', function (done) {
      const collector = new PublicationCollector();
      collector.collect('movies.all', (collections) => {
        assert.equal(collections.movies.length, 1);
        done();
      });
    });
  });
});
