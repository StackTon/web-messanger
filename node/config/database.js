const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
const AllGroups = require('../models/AllGroups');

module.exports = config => {
    mongoose.connect(config.dbPath, {
        useMongoClient: true
    });
    const db = mongoose.connection;
    db.once('open', async err => {
        if (err) throw err;
        try {
            const firstUser = await User.seedAdminUser();
            
            if(firstUser){
                await AllGroups.seedAllChat(firstUser._id);
            }
            
        }
        catch (e) {
            console.log('Something went wrong');
            console.log(e);
        }
    });
    db.on('error', reason => {
        console.log(reason);
    });
};