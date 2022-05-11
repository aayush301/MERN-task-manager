const express = require("express");
const router = express.Router();
const { getTasks, getTask, postTask, putTask, deleteTask } = require("../controllers/taskControllers");
const { verifyAccessToken } = require("../middlewares.js");

// Routes beginning with /api/tasks
router.get("/", verifyAccessToken, getTasks);
router.get("/:taskId", verifyAccessToken, getTask);
router.post("/", verifyAccessToken, postTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
