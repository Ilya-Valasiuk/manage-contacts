const bodyParser = require('body-parser');
const morgan = require('morgan');

const contactRouter = require('src/controller');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(morgan('tiny'));

    app.use('/contacts', contactRouter);
};
