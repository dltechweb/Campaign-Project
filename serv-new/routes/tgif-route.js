const express = require("express");

const router = express.Router();

const {
  getAllDatas_tgif,
  createData_tgif,
  getData_tgif,
} = require("../controllers/tgif-controller");

router.route("/").get(getAllDatas_tgif)
router.route('/submit').post(createData_tgif);
router.route("/:id").get(getData_tgif);

module.exports = router;
