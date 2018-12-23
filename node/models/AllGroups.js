const mongoose = require('mongoose');

const allGroups = new mongoose.Schema({
    groupName: { type: mongoose.Schema.Types.String, required: true, unique: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GroupMessage' }],
});

const AllGroups = mongoose.model('AllGroups', allGroups);

AllGroups.seedAllChat = async (userId) => {
    try {
        let groups = await AllGroups.find();
        if (groups.length > 0) return;
        return AllGroups.create({
            groupName: 'All Chat',
            users: [userId]
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = AllGroups;