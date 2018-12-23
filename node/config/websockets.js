const { mess } = require('../socket-handers/');
const AllGroups = require('../models/AllGroups');
const Message = require('../models/PersonalMessage');
const User = require('../models/User');

module.exports = io => {
    io.on("connection", async socket => {
        console.log("New client connected");
        try {
            const allChat = await AllGroups.findOne({groupName: 'All Chat'}).populate('users').populate({
                path: 'messages',
                populate: {
                    path: 'from'
                }
            });

            socket.emit("allMessages", allChat);
        }
        catch (e) {
            console.log(e);
        }

        socket.on('newMessage', (msg) => {
            mess.newMessage(io, msg);
        });

        socket.on("disconnect", () => console.log("Client disconnected"));
    });
};