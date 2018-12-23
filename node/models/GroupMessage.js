const mongoose = require('mongoose');

const groupMessage = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    to: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AllGroups' },
    content: { type: mongoose.Schema.Types.String },
});

module.exports  = mongoose.model('GroupMessage', groupMessage);