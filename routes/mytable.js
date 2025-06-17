const express = require("express")
const MytableController = require("../controllers/MytableController")
const router = express.Router()

router.get("/", MytableController.getAll)  
router.get("/dgenerica/:dgenerica_", MytableController.getBydgenerica)
router.get("/regimen/:regimen", MytableController.getByRegimen)
router.get("/codpos/:codpos", MytableController.getByCodpos)
router.get("/Geo_Point/:Geo_Point", MytableController.getByGeoPoint)
module.exports = router