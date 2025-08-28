import express from 'express';
import cors from 'cors';
import Replicate from 'replicate';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate',
});

// Model and default input for Stable Diffusion XL (SDXL)
const model = 'stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc';

// POST API to generate AI image based on prompt
app.post('/generate-image', async (req, res) => {
  const prompt = req.body.prompt;

  // Build input parameters (you can add more or pass from frontend)
  const input = {
    width: 768,
    height: 768,
    prompt: prompt || 'A cyberpunk robot cat, cinematic',
    refine: 'expert_ensemble_refiner',
    scheduler: 'K_EULER',
    lora_scale: 0.6,
    num_outputs: 1,
    guidance_scale: 7.5,
    apply_watermark: false,
    high_noise_frac: 0.8,
    negative_prompt: '',
    prompt_strength: 0.8,
    num_inference_steps: 25,
  };

  try {
    console.log('Running Replicate model with prompt:', prompt);
    const output = await replicate.run(model, { input });
    // output is usually an array of image URLs, return first
    res.json({ imageUrl: output[0] });
  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
