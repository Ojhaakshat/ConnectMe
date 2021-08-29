const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const User = require('./user'); 
const userSchema = new Schema({ 
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        min: 5, 
        max: 20 
    }, 
    email: { 
        type: String, 
        required: true, 
        unique:true, 
    }, 
    password: { 
        type: String, 
        required: true, 
        unique:true, 
        min: 6 
    }, 
    profilePicture: { 
        type: String, 
    }, 
    followers: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    following: {     
            type: Schema.Types.ObjectId,
            ref: 'User'
    } 
}); 
module.exports = mongoose.model('User',userSchema);