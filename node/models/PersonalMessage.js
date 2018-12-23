const mongoose = require('mongoose');

const personalMessage = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    to: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: mongoose.Schema.Types.String },
});

module.exports  = mongoose.model('PersonalMessage', personalMessage);