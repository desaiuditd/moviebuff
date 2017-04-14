import './analytics.html';

import { Movies } from '/imports/api/movies/movies.js';

const Chart = require('chart.js');

Template.App_analytics.onCreated(function () {
    Meteor.subscribe('movies.all');
});

Template.App_analytics.onRendered(() => {
    Tracker.autorun(() => {
        const movies = Movies.find({}).fetch();

        const data = [0,0,0,0,0,0];

        movies.forEach((movie) => {
            switch (movie.rating) {
                case '5':
                case 5:
                    data[5]++;
                    break;
                case '4':
                case 4:
                    data[4]++;
                    break;
                case '3':
                case 3:
                    data[3]++;
                    break;
                case '2':
                case 2:
                    data[2]++;
                    break;
                case '1':
                case 1:
                    data[1]++;
                    break;
                case '0':
                case 0:
                default:
                    data[0]++;
                    break;
            }
        });

        var ctx = document.getElementById("movie-ratings-bar");
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Not Rated", "Rating 1", "Rating 2", "Rating 3", "Rating 4", "Rating 5"],
                datasets: [
                    {
                        label: "Movies Count by Rating",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data: data,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
});