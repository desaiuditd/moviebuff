/**
 * Created by udit on 4/13/17.
 */

import { Movies } from '/imports/api/movies/movies.js';

export const MoviesSorter = {
    sortByTitle() {
        return Movies.find({}, {sort: {title: 1}});
    },
    sortByReleaseDate() {
        return Movies.find({}, {sort: {releaseDate: -1}});
    },
};
