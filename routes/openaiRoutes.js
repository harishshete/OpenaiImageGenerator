
const router = require("express").Router();
const openaiController = require("../controllers/openaiController");

router.get("/", (req, res) => {
    res.render("home", res);
})


router.post("/generateimage", openaiController.generateImage);

router.get("/test", (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    res.json({
        success : true,
        data : "working..."
    });
});


module.exports = router;