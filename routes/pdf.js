const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:orderId", (req, res) => {
  const filePath = path.join(__dirname, "../protected/ebook.pdf");

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("Cache-Control", "no-store");

  res.sendFile(filePath);
});

module.exports = router;
