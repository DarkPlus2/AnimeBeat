const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const animeRoutes = require("./routes/anime");
const watchlistRoutes = require("./routes/watchlist");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/anime", animeRoutes);
app.use("/api/watchlist", watchlistRoutes);

// Health check
app.get("/", (req, res) => res.send("AnimeNest Backend is running"));

// Render sets PORT automatically
const PORT = process.env.PORT || 5000;

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
