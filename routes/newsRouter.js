const router = require("express").Router();
const adCtrl = require("../controllers/newsCtrl");
const auth = require("../middleware/auth");

router.route("/news").post(auth, adCtrl.createNews).get(auth, adCtrl.getNews);

router
  .route("/news/:id")
  .patch(auth, adCtrl.updateNews)
  .get(auth, adCtrl.getNews)
  .delete(auth, adCtrl.deleteNews);

router.patch("/post/:id/like", auth, adCtrl.likePost);

router.patch("/post/:id/unlike", auth, adCtrl.unLikePost);

module.exports = router;
