const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    username: {
	    type: String,
		required: true
    },
    message: {
            type: String
        }
    },
    {
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    });

module.exports = mongoose.model('Messages', MessagesSchema);