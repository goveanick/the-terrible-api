const express = require("express");
const router = express.Router();
const dummyData = [{
    "name": "Rajesh Berwal",
    "age": 21,
    "description": "Full Stack Developer"
  },
  {
    "name": "Someone",
    "age": 25,
    "description": "Frontend Developer"
  },
  {
    "name": "Another",
    "age": 24,
    "description": "Backend Developer"
  }
];
router.get("/", (req, res) => {
  res.json(dummyData);
});
router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
if (dummyData.length <= user_id) return res.json({ message: "User not found" });
  res.json(dummyData[user_id]);
});
module.exports = router;