const controllers = require('../controllers');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.post('/username', controllers.home.postNickname);
    app.get('/allGroups', controllers.home.getAllGroups);
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};