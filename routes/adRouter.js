const router = require("express").Router();
const adCtrl = require("../controllers/adCtrl");
const auth = require("../middleware/auth");

router.route("/ads").post(auth, adCtrl.createAd).get(auth, adCtrl.getAds);

router
  .route("/ad/:id")
  .patch(auth, adCtrl.updateAd)
  .get(auth, adCtrl.getAd)
  .delete(auth, adCtrl.deleteAd);

router.patch("/post/:id/like", auth, adCtrl.likePost);

router.patch("/post/:id/unlike", auth, adCtrl.unLikePost);

module.exports = router;
