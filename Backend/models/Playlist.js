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
    track: {
        type: String,
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    songs:{
       type:mongoose.Types.ObjectId,
       ref:"user"
    },
    collaborators:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }

});

const PlaylistModule = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModule;