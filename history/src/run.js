module.exports = (app, config) => {
    app.listen(config.port, function () {
        console.log(`History app listening on port ${config.port}!`);
    });
};
