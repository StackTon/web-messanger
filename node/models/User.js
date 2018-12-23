const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserChat' }]
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
    try {
        let users = await User.find();
        if (users.length > 0) return;
        return User.create({
            username: 'alex',
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = User;