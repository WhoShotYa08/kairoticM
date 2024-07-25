const express = require("express");

const router = express.Router();

const upload = require('../middleware/multer');

router.post('/upload', upload.single('file', (req, res) => {
    console.log(req.body);
    console.log(req.file);
}))

export default router;
