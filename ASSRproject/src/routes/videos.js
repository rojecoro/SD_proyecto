const {Router} = require("express");
const router = Router();
const {getVideos} = require("../controller/video.controller");
router.get('/', getVideos);
module.exports = router;