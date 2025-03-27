const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const { uploadSpreadsheet } = require("../controllers/upload.controller");

//Multer configuration (where to store, how to save the file, rules)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => { 
    //Avoid overwriting file
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    let finalName = file.originalname;
    const uploadPath = 'uploads/';
    let count = 1;
    while(fs.existsSync(path.join(uploadPath, finalName))){
      finalName = `${baseName} (${count})${ext}`;
      count ++;
    }
    cb(null, finalName);
  },
});

const upload = multer({
  storage,
  //Rule to only acept files .xlsx or .xls
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === ".xlsx" || ext === ".xls") {
      cb(null, true);
    } else {
      cb(new Error("Only files .xlsx or .xls are allowed"));
    }
  },
});

/**
 * @swagger
 * /upload/spreadsheet:
 *   post:
 *     summary: Upload of only spreadsheets files (.xlsx ou .xls)
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Upload sucessfully!
 *       400:
 *         description: No file updated!
 *       500:
 *         description: Upload Error!
 */
router.post("/spreadsheet", upload.single("file"), uploadSpreadsheet);

module.exports = router;
