const mongoose = require('mongoose');

const userChat = new mongoose.Schema({
    withUser: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: 'User' },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports = mongoose.model('UserChat', userChat);