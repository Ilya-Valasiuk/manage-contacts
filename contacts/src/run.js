module.exports = (app, config) => {
    app.listen(config.port, function () {
        console.log(`Contacts app listening on port ${config.port}!`);
    });
};
