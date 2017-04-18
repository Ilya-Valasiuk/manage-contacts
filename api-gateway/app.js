const express = require('express');
const request = require('request');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const config = require('./config');
const routerMapConfig = require('./map.json');

app.use(helmet());
app.use(morgan('combined'));

routerMapConfig.forEach((route) => {
    app.all(route.match, (req, res) => {
        const options = {
            method: req.method,
            url: `${route.path}:${route.port}${req.url}`
        };
    
        const rreq = request(options);

        req.pipe(rreq).pipe(res);
    });
});

app.listen(config.port, () => {
    console.log(`Api gateway started on ${config.port} port.`);
});