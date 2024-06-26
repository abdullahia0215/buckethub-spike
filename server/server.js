const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route Includes
const userBucketRouter = require("./routes/user.bucket.router");
const brigadesRouter = require("./routes/brigades.router.");
const userRouter = require("./routes/user.router");

// Express Middleware
app.use(express.json());
app.use(express.static("build"));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/userbucket", userBucketRouter);
app.use("/api/brigades", brigadesRouter);
app.use("/api/user", userRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
