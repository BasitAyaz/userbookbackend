const express = require("express");
const router = express.Router();
const userModel = require("../model/usermodel");

router.get("/", (req, res) => {
  userModel.find((err, result) => {
    if (!err) {
      res.send(result).status(200);
    }
  });
});
router.post("/", (req, res) => {
  let body = req.params.body;

  let userObj = new userModel(body);
  userObj.save((err, result) => {
    if (!err) {
      res.send(result).status(200);
    }
  });
});

module.exports = router;
