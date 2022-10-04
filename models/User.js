const { Schema, model  } = require('mongoose');

const UserSchema = new Schema({ // schema field declarations
    username: {
        type: String
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          },
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    { // schema config options 
        toJSON: {
            virtuals: true,
    },
        id: false
    });

UserSchema.virtual('friendCount').get(function() { // schema virtual
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;