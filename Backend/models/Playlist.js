const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    songs:[{
       type:mongoose.Types.ObjectId,
       ref:"Song"
    }],
    collaborators:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]

});

const PlaylistModule = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModule;