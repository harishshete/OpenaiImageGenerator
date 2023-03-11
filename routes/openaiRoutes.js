
const router = require("express").Router();
const openaiController = require("../controllers/openaiController");

router.get("/", (req, res) => {
    const host = req.get("host")
    res.render("home", { host });
})


router.post("/generateimage", openaiController.generateImage);

router.get("/test", (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    res.json({
        success: true,
        data: "working..."
    });
});


module.exports = router;