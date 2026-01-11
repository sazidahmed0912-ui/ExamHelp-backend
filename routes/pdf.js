const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:orderId", (req, res) => {
  const pdfPath = path.join(__dirname, "../pdf/HSLC_ENGLISH_EBOOK.pdf");

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=ebook.pdf");

  res.sendFile(pdfPath, err => {
    if (err) {
      console.log("❌ PDF Error:", err);
      res.status(404).send("PDF not found");
    }
  });
});

module.exports = router;
