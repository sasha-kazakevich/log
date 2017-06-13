const createMed = require('./utils/createMed')

const routes = {};

const namePage = ['main','directions','about','servicestwo','services','vacancies','online','contacts'];

namePage.forEach((el) => {
    createMed(el,routes);
});

module.exports = routes;
