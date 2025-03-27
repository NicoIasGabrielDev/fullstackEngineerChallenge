function uploadSpreadsheet(req, res) {
  if (!req.file) {
    return res.status(400).json({ message: "Upload Error, Try again!" });
  }
  res.status(200).json({
    message: "Upload sucessfully",
    filename: req.file.originalname,
    savedAs: req.file.filename,
  });
}

module.exports = { uploadSpreadsheet };
