const mongoose = require('mongoose');
const { mongoURI } = require('../constants/enviroments');

const checkConnection = () => mongoose.connection.readyState;

const connect = async() => {
    try {
        if (checkConnection() === 0) {
            console.log('Connecting to MongoDB...');
            await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
        console.log('MongoDB is already connected!');
    } catch (error) {
        console.error(error);
    }
    return mongoose.connection.readyState;
};

const disconnect = async() => {
    try {
        if (checkConnection) {
            console.log('Disconnecting from MongoDB...');
            await mongoose.connection.close();
        }
    } catch (error) {
        console.error(error);
    }
    return checkConnection() === 0 ? 'Disconnected!' : 'Connected!';
};

module.exports = { connect, disconnect, checkConnection };