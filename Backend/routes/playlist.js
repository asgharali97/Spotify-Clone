const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/Playlist");
const Song = require("../models/Song");
const User = require("../models/User");

// Router : 1 creating Playlist using Post
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.body
    const {name,thumbnail,songs} = req.body;
    if(!name || !thumbnail || !songs){
      return res.status(301).json({err:"Insufficient data to create playlist"})
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner:currentUser._id,

    };
    const playlist = await Playlist.create(playlistData)
    return res.status(200).json(playlist)
  }
);
// Router : 2 get  Playlist by playlistId using GET
router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid Id" });
    }
    return res.status(200).json(playlist);
  }
);
// Router : 3 get  Playlist by artistID using GET
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Invalid Artist Id" });
    }
    const playlist = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlist });
  }
);
// Router : 4 Add songs to  Playlist using POST
router.post(
  "/add/songs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songsId } = req.body;
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Playlist does not exist" });
    }
    // Check the current user own the playlist or collaborators
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res.status(301).json({ err: "Not Allowed" });
    }
    const songs = await Songs.findOne({ _id: songsId });
    if (!songs) {
      return res.status(301).json({ err: "songs does not exist" });
    }
    playlist.songs.push(songsId);
    await playlist.save();
    return res.status(200).json(playlist);
  }
);
module.exports = router;
