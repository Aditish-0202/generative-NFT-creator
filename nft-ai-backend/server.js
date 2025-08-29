import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // <-- Add this

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Hugging Face model you want to use (image-to-image or text-to-image, e.g. "runwayml/stable-diffusion-v1-5")
const HF_MODEL_ID = "stabilityai/stable-diffusion-xl-base-1.0"; // you can use any other HF model compatible with image-generation

app.post('/generate-image', async (req, res) => {
  const prompt = req.body.prompt || 'A cyberpunk robot cat, cinematic';

  try {
    // POST request to Hugging Face Inference API
    const response = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: prompt })
    });

    // Check if successful and content-type
    if (!response.ok || !response.headers.get('content-type').includes('image')) {
      const errorBody = await response.text();
      throw new Error(`Hugging Face API returned error: ${errorBody}`);
    }

    // The API returns the image as a binary, so we need to send it back as a base64 data URL
    const imageBuffer = await response.buffer();
    const imageBase64 = imageBuffer.toString('base64');
    const imageUrl = `data:image/png;base64,${imageBase64}`;
    res.json({ imageUrl });
  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({ error: 'AI generation failed', details: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
