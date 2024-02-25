// uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// Set up storage location for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // Temporary directory for uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Create multer upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
