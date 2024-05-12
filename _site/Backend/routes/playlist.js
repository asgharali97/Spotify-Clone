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
    const { name, thumbnail, song } = req.body;
    if (!name || !thumbnail || !song) {
      return res.status(301).json({ err: "Insufficient data to create playlist" })
    }
    const playlistData = {
      name,
      thumbnail,
      song,
      owner: currentUser._id,

    };
    const playlist = await Playlist.create(playlistData)
    return res.status(200).json(playlist)
  }
);

// Router : 2 get  Playlist by playlistId using GET

router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", {session: false}),
  async (req, res) => {
      // This concept is called req.params
      const playlistId = req.params.playlistId;
      // I need to find a playlist with the _id = playlistId
      const playlist = await Playlist.findOne({_id: playlistId}).populate({
        path :"songs",
        populate:{
          path:"artist"
        }
      });
      if (!playlist) {
          return res.status(301).json({err: "Invalid ID"});
      }
      return res.status(200).json(playlist);
  }
);


// Router : 4 All  Playlist using GET
// I fix this by my own functionalty
router.get(
  "/get/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // const artistId = req.user._id;
    const playlist = await Playlist.find({ owner: req.user._artistId }).populate("owner");
    return res.status(200).json({ data: playlist });
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
  "/add/song",
  passport.authenticate("jwt", {session: false}),
  async (req, res) => {
      const currentUser = req.user;
      const {playlistId, songId} = req.body;
      // Step 0: Get the playlist if valid
      const playlist = await Playlist.findOne({_id: playlistId});
      if (!playlist) {
          return res.status(304).json({err: "Playlist does not exist"});
      }

      // Step 1: Check if currentUser owns the playlist or is a collaborator
      if (
          !playlist.owner===(currentUser._id) &&
          !playlist.collaborators.includes(currentUser._id)
      ) {
          return res.status(400).json({err: "Not allowed"});
      }
      // Step 2: Check if the song is a valid song
      const song = await Song.findOne({_id: songId}).populate("songs")
      if (!song) {
          return res.status(304).json({err: "Song does not exist"});
      }

      // Step 3: We can now simply add the song to the playlist
      playlist.songs.push(songId);
      await playlist.save();

      return res.status(200).json(playlist);
  }
);

// router.post(
//   '/add/song',
//   passport.authenticate('jwt', { session: false }),
//   async (req, res) => {
//     const currentUser = req.user;
//     const { playlistId, songId } = req.body;

//     try {
//       // Step 0: Get the playlist if valid
//       const playlist = await Playlist.findOne({ _id: playlistId });

//       if (!playlist) {
//         return res.status(404).json({ err: 'Playlist does not exist' });
//       }

//       // Step 1: Check if currentUser owns the playlist or is a collaborator
//       if (
//                   !playlist.owner === (currentUser._id) &&
//                   !playlist.collaborators.includes(currentUser._id)
//               ) {
//                   return res.status(400).json({err: "Not allowed"});
//               }


//       // Step 2: Check if the song is a valid song
//       const song = await Song.findOne({ _id: songId });

//       if (!song) {
//         return res.status(404).json({ err: 'Song does not exist' });
//       }

//       // Step 3: Check if the playlist has the 'song' property
//       if (!playlist.song) {
//         playlist.song = []; // Initialize 'song' property as an empty array
//       }

//       // Step 4: Add the song to the playlist
//       playlist.song.push(songId);
//       await playlist.save();

//       // Step 5: Include details about the added song in the response
//       const response = {
//         playlist: playlist,
//         addedSong: song
//       };

//       return res.status(200).json(response);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// );


module.exports = router;
