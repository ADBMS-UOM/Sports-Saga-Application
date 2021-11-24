const router = require("express").Router();
const newsCtrl = require("../controllers/newsCtrl");
const auth = require("../middleware/auth");

router.route("/news").post(auth, newsCtrl.createNews).get(auth, newsCtrl.getNews);

router
  .route("/news/:id")
  .patch(auth, newsCtrl.updateNews)
  .get(auth, newsCtrl.getNews)
  .delete(auth, newsCtrl.deleteNews);

router.patch("/post/:id/like", auth, newsCtrl.likePost);

router.patch("/post/:id/unlike", auth, newsCtrl.unLikePost);

module.exports = router;
