const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/add", async (req, res) => {
  const { email, animeId } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user.watchlist.includes(animeId)) {
      user.watchlist.push(animeId);
      await user.save();
    }
    res.json({ msg: "Added to watchlist" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add" });
  }
});

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email });
    res.json({ watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch watchlist" });
  }
});

module.exports = router;
