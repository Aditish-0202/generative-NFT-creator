import React, { useState } from "react";

import { uploadImageToFilebase } from "../utils/filebaseApi";

const GeneratePage = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [minting, setMinting] = useState(false);
  const [mintError, setMintError] = useState("");
  const [ipfsUrl, setIpfsUrl] = useState("");

  const handleMint = async () => {
    setMintError("");
    setMinting(true);
    try {
      // Fetch the image as a Blob from the URL
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Convert blob to File (required by form data uploader)
      const fileName = `nft-image-${Date.now()}.png`;
      const file = new File([blob], fileName, { type: blob.type });

      // Upload image file to Filebase backend
      const result = await uploadImageToFilebase(file);

      if (result.success) {
        const ipfsUrl = `https://ipfs.filebase.io/ipfs/${result.fileName}`; // or get CID from response if different
        setIpfsUrl(ipfsUrl);
        console.log("Image uploaded to Filebase IPFS:", ipfsUrl);

        // TODO: Add your minting logic here, passing ipfsUrl as tokenURI
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      setMintError("Failed to upload image: " + error.message);
    }
    setMinting(false);
  };

  const generateImage = async (e) => {
    e.preventDefault();
    setError("");
    setImageUrl("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        setError("Failed to generate image.");
      }
    } catch (e) {
      setError("Server error, please try again!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen  bg-[#0f0f1a] flex flex-col items-center pt-24 px-4">
      {/* Headline */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Generate <span className="border-b-4 border-blue-400 px-2">NFT</span>{" "}
          with AI.
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl mb-24">
          Create and deploy NFT artwork in seconds
        </p>
      </div>

      {/* Generate Bar */}
      <form
        className="w-full max-w-2xl flex items-center bg-[rgba(27,28,43,1)] rounded-xl shadow-lg px-4 py-2"
        onSubmit={generateImage}
      >
        <input
          type="text"
          className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-3 text-lg"
          placeholder="A collection of cute cyberpunk robots"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="
            px-6 py-2 rounded-lg bg-[rgba(28,30,43,0.8)]
            border border-[#40aaff]
            shadow-[0_2px_24px_0_rgba(64,170,255,0.15)]
            transition-all duration-200
            text-white font-semibold
            hover:bg-[#092134] hover:border-[#53dfff]
            hover:shadow-[0_3px_40px_0_rgba(83,223,255,0.2)]
            focus:outline-none focus:ring-2 focus:ring-[#40aaff]
          "
          disabled={loading || !prompt.trim()}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {/* Error Message */}
      {error && <div className="text-red-400 my-4">{error}</div>}

      {/* Display Generated Image */}
      {imageUrl && (
        <div className="mt-10 flex flex-col items-center">
          <img
            src={imageUrl}
            alt="AI generated NFT"
            className="rounded-xl shadow-xl max-w-md"
          />
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-400 underline"
          >
            View Full Size
          </a>

          <button
            onClick={handleMint}
            disabled={minting}
            className="
        mt-4 px-6 py-2 rounded-lg bg-[rgba(28,30,43,0.8)]
        border border-[#40aaff]
        shadow-[0_2px_24px_0_rgba(64,170,255,0.15)]
        transition-all duration-200
        text-white font-semibold
        hover:bg-[#092134] hover:border-[#53dfff]
        hover:shadow-[0_3px_40px_0_rgba(83,223,255,0.2)]
        focus:outline-none focus:ring-2 focus:ring-[#40aaff]
      "
          >
            {minting ? "Uploading to IPFS..." : "Mint NFT"}
          </button>

          {mintError && <p className="mt-2 text-red-500">{mintError}</p>}
        </div>
      )}
    </div>
  );
};

export default GeneratePage;
