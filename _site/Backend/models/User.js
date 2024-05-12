const mongoose = require("mongoose");

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    likedSongs: {
        type: String,
        default: ""
    },
    likedPlaylist: {
        type: String,
        default: ""
    },
    subscribedArtist: {
        type: String,
        default: ""
    }
});

const UserModule = mongoose.model("User", User);

module.exports = UserModule;