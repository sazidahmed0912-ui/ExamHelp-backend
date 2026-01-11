const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:orderId", (req, res) => {
  const filePath = path.join(__dirname, "../pdf/HSLC_ENGLISH_EBOOK.pdf");

  res.sendFile(filePath);
});

module.exports = router;
