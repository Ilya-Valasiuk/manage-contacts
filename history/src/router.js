const bodyParser = require('body-parser');
const morgan = require('morgan');

const historyRouter = require('src/controller');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(morgan('tiny'));

    app.use('/history', historyRouter);
};
