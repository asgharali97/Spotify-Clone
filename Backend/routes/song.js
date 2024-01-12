const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const Song = require("../models/Song");

// Router: 1 Creating songs using POST
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Inefficient detail to create songs" });
    }
    const artist = req.user._id;
    const songsDetail = { name, thumbnail, track, artist };
    const createdsong = await Song.create(songsDetail);
    return res.status(200).json(createdsong);
  }
);
// Router: 2 Get all  songs using GET
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const songs = await Song.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);
// Router:3 Get songs by artist using GET
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Artist does not exists" });
    }
    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);
// Router:3 Get songs by name using GET

router.get(
  "/get/name/:songname",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const {songname} = req.params; // Corrected variable name
    try {
      const songs = await Song.find({
        "$or": [{ name: { $regex: req.params.songname } }],
      }).populate("artist");
      return res.status(200).json({ data: songs });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


module.exports = router;
