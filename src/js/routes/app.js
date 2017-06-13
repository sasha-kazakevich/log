const page = require('page');
const routes = require('./routes');
const callback = require('../utils/main');

page('/',routes.main,callback.main);
page('/directions',routes.directions,callback.directions)
page('/about',routes.about,callback.about)
page('/services',routes.services,callback.services);
page('/servicestwo',routes.servicestwo,callback.servicestwo)
page('/vacancies',routes.vacancies,callback.vacancies)
page('/online',routes.online,callback.online)
page('/contacts',routes.contacts,callback.contacts)

page();
