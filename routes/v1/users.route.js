const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

// router.get("/:random", (req, res) => {
//     res.send("User Found")
// });

// router.post("/", (req, res) => {
//     res.send("User Added")
// });

router.route("/")
    .get(usersControllers.getAllUsers)
    .post(usersControllers.saveAUsers);

router
    .route("/:id")
    .get(viewCount, usersControllers.getRandomUser)
    .patch(usersControllers.updateUsers)
    .delete(usersControllers.deleteUsers)
module.exports = router;