const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const page = req.query.page || 1;
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch anime" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch anime detail" });
  }
});

module.exports = router;
