const { Schema, model } = require('mongoose');
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
    },
    reactions: []
});

const User = model('User', UserSchema);
module.exports = User