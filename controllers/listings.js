const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");

router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find({});
    console.log(listings); // []
    res.render("listings/index.ejs", {
      listings: listings,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
