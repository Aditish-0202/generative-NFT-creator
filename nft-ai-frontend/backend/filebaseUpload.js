require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const s3 = new S3Client({
  endpoint: 'https://s3.filebase.com',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.FILEBASE_KEY,
    secretAccessKey: process.env.FILEBASE_SECRET,
  }
});

const BUCKET_NAME = 'my-nft-project-storage-aditi-sh-156';

app.post('/upload', upload.single('file'), async (req, res) => {
      console.log("POST /upload hit!", req.file);

  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
    await s3.send(new PutObjectCommand(params));
    res.json({ success: true, fileName: req.file.originalname });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const port = process.env.PORT || 5001;


app.listen(5001, () => console.log(`Server running on port ${port}`));
