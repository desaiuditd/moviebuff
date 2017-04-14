/**
 * Created by udit on 4/13/17.
 */

import { Meteor } from 'meteor/meteor';
import { Movies } from '../movies.js';

Meteor.publish('movies.all', function () {
    return Movies.find();
});
