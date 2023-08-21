const express = require("express");

const router = express.Router();

router.get('/app', (req, res, nxt)=>{
    res.send("Content Page Working");
});

router.post('/app', (req, res, nxt)=>{
    //Add Student Details Logic
});

router.delete('/app', (req, res, nxt)=>{
    //Delete Student Details Logic
});

module.exports = router;