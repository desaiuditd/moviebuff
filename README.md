# MovieBuff
A one page web application for movies and their ratings with analytics

### How to Run

Below steps assume that you have already installed NodeJS & Meteor on your machine.

- `git clone https://github.com/desaiuditd/moviebuff.git`
- `cd moviebuff`
- `meteor npm install`
- `meteor run`

### Pages

- **Home Page:** Home page shows a list of movies in a card view where each card view shows following movie information:

    - Title
    - Poster
    - Release Date
    - Rating
    
    Release Date is displayed in human readable format. E.g., future date is `Releasing in x days/months/years` and past date is `Released x days/months/years ago`.

    Each card shows a star rating widget depicting the rating for each movie. User can click on the star rating widget to change the rating of those movies which are already released. This change will be persistent in the database. Star rating movie will be disabled for the future movies which are yet to be released. For those movies which are not rated, the card shows `Not Rated`. It's the same for future movies as they are yet to be released and rated.

    User can also sort the list of movie cards by Title and Release Date. The list can be toggled between the sorted order and the natural order.

- **Analytics Page:** This page shows a bar chart with X-Axis as Stars (1,2,3,4,5) and Y-Axis as number of movies for each rating. The graph will be auto-updated with the new ratings changed by user.


Both the pages are mobile friendly (responsive) and can be accessed from mobile / desktop browsers. **Material Bootstrap** framework is used to create material design layout and achieve responsive UI.

### Data

Initial data for movies is taken from `private/movies.json` & `public/img/movies/images`.

On initial server startup, the database will be empty. This time, the `movies.json` will be used to populate the data. And afterwards, data will be read from database itself.

### Unit Tests

Unit tests are written for all the logic blocks in the app. They are under `imports/api/movies/` directory.

All the unit tests files have this naming convention: `*.tests.js`.

MochaJS test framework is used here along with ChaiJS BDD assertion library.

To run the unit tests, run this command on terminal:

```
meteor test --driver-package practicalmeteor:mocha --port 3100
```

This will run the unit tests and you can see the results on browser at `http://localhost:3100` URL.

