const router = require("express").Router();

const auth = require("./auth");
const schedule = require("./schedules");
const appointment = require("./appointments");
const user = require("./user");
const service = require("./services");

router.use("/auth", auth);
router.use("/schedule", schedule);
router.use("/service", service);
router.use("/appointment", appointment);
router.use("/user", user);

module.exports = router;
