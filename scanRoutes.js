const express = require("express");
const router = express.Router();
const { getScans, createScan } = require("../controllers/scanController");

router.get("/", getScans);
router.post("/", createScan);

module.exports = router;
