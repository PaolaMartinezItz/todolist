const { connect, disconnect } = require('./config/db');

(async() => {
    await connect();
    require('./app.js');
})();

process.on('SIGINT', () => {
    disconnect().then((state) => {
        console.log(state);
        process.exit(0);
    });
});