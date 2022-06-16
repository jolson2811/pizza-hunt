const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// Delete route / remove reply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
