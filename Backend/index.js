const express = require("express");
const passport = require("passport");
const connect = require("./db");
const User = require("./models/User");
const app = express();
// const authRoutes = require("./routes/auth")
require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const port = 4000;

// connecting Mongose
connect();

// settuping passport-JWT

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.hkey,
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.identifier);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}));

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/song", require("./routes/song"));
app.use("/api/playlist", require("./routes/playlist"));

app.listen(port, () => {
  console.log("App is listening on" + port);
});
