module.exports = {
    development: {
        port: process.env.PORT || 5500,
        dbPath: 'mongodb://localhost:27017/web-messager-db'

    },
    production: {
        port: process.env.PORT || 5500
    }
};