const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Comment = require('./comment'); 
const User = require('./user'); 
const postSchema = new Schema({ 
    title : String, 
    description: String, 
    likes: Number, 
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
    }, 
    comment: [ 
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Comment' 
        } 
    ] 
}); 
module.exports = mongoose.model('Post', postSchema); 
               