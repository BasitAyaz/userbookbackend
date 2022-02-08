const express = require("express");
const router = express.Router();
const bookModel = require("../model/bookmodel");

router.get("/", (req, res) => {
  bookModel.find((err, result) => {
    if (!err) {
      res.send(result).status(200);
    }
  });
});
router.post("/", (req, res) => {
  let body = req.params.body;

  let bookObj = new bookModel(body);
  bookObj.save((err, result) => {
    if (!err) {
      res.send(result).status(200);
    }
  });
});

module.exports = router;
