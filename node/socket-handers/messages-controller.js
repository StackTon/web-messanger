const User = require('../models/User');
const AllGroups = require('../models/AllGroups');
const GroupMessage = require('../models/GroupMessage');

module.exports = {
    newMessage: async (io, msg) => {
        try {
            const currnetUser = await User.findOne({ username: msg.from });
            const currnetGroup = await AllGroups.findOne({ groupName: msg.to });
            if (!currnetUser || !currnetGroup) {
                return;
            }
            
            const newGroupMessage = await GroupMessage.create({
                from: currnetUser._id,
                to: currnetGroup._id,
                content: msg.content
            })

            currnetGroup.messages = currnetGroup.messages.concat([newGroupMessage._id]);

            await currnetGroup.save();

            io.emit("newMessage", { from: { username: currnetUser.username }, to: msg.to, content: newGroupMessage.content, _id: newGroupMessage._id });
        }
        catch (e) {
            console.log(e);
        }
    },
};