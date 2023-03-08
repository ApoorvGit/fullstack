const express = require("express")
const router = express()
router.use(express.json())
const middleware = require("../middlewares/publicData.middleware.js")
const controller = require("../controllers/publicData.controller.js")

router.use(middleware.requestValidator)
router.get("/giveMeData", controller.giveMeData)
router.post("/saveData", controller.saveData)
module.exports = router