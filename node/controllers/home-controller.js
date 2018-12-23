const User = require('../models/User');
const AllGroups = require('../models/AllGroups');

module.exports = {
    index: (req, res) => {
        res.send("Hello");
    },
    postNickname: async (req, res) => {
        const username = req.body.username;
        const user = await User.findOne({ username });
        if (!user) {
            try {
                const newUser = await User.create({ username });
                const allChat = await AllGroups.findOne({ groupName: 'All Chat' });

                allChat.users = allChat.users.concat([newUser._id]);

                await allChat.save();
                res.send({ status: 'success', username });

            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            res.send({ status: 'success', username });
        }
    },
    getAllGroups: async (req, res) => {
        const allGroups = await AllGroups.find({});
        res.send({ status: 'success', allGroups })
    }
};