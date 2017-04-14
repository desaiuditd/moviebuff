import './body.html';

import "../../components/appNav/appNav.js";

Template.App_body.onRendered(() => {
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
    });
});