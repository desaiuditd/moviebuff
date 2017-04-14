import './home.html';

import { Movies } from '/imports/api/movies/movies.js';
import { MoviesSorter } from '/imports/api/movies/movie-sorter.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Template.App_home.onCreated(function () {
    Meteor.subscribe('movies.all');
});

Template.App_home.helpers({
    movies() {
        const sortMoviesBy = Session.get('sortMoviesBy');
        let movies = undefined;
        switch (sortMoviesBy) {
            case 2:
                movies = MoviesSorter.sortByReleaseDate();
                break;
            case 1:
                movies = MoviesSorter.sortByTitle();
                break;
            case 0:
            default:
                movies = Movies.find({});
                break;
        }
        return movies;
    },
    getReleaseDate(date) {
        return '<span data-toggle="tooltip" title="' + moment(date).format('Do MMM, YYYY') + '">' + moment(date).fromNow() + '</span>';
    },
    getRating() {
        return parseInt(this.rating);
    },
    getWidgetId() {
        return 'star-widget-'+this._id;
    },
    isFutureRelease() {
        return moment(this.releaseDate).format('X') > moment().format('X');
    }
});

Template.App_home.events({
    'change .rating-widget'(event) {
        const $target = $(event.target).closest('.rating-widget');
        const rating = $target.data('userrating');
        if(rating) {
            // string length - star-widget-
            Meteor.call('movies.updateRating', this.id.slice(12), rating, function (err, result) {
                if(err) {
                    console.log(err);
                    return;
                }
                // $target.siblings('.rating-text').html('Rating ' + rating);
            });
        }
    },
    'click #movies-sort-by-release-date'(event) {
        event.preventDefault();
        const btn = event.currentTarget;
        if (!$(btn).hasClass('btn-raised')) {
            $(btn).parent().children('.btn').removeClass('btn-raised');
            $(btn).addClass('btn-raised');
            Session.set('sortMoviesBy', 2);
        } else {
            $(btn).removeClass('btn-raised');
            Session.set('sortMoviesBy', undefined);
        }
    },
    'click #movies-sort-by-title'(event) {
        event.preventDefault();
        const btn = event.currentTarget;
        if (!$(btn).hasClass('btn-raised')) {
            $(btn).parent().children('.btn').removeClass('btn-raised');
            $(btn).addClass('btn-raised');
            Session.set('sortMoviesBy', 1);
        } else {
            $(btn).removeClass('btn-raised');
            Session.set('sortMoviesBy', undefined);
        }
    },
});
