import React from "react";

const nfts = [
  {
    id: 1,
    name: "Cyberpunk Robot #1",
    image: "https://via.placeholder.com/300x300.png?text=NFT+1",
    owner: "0x1234...abcd",
    price: "0.05 ETH",
  },
  {
    id: 2,
    name: "Cyberpunk Robot #2",
    image: "https://via.placeholder.com/300x300.png?text=NFT+2",
    owner: "0x5678...efgh",
    price: "0.08 ETH",
  },
  {
    id: 3,
    name: "Cyberpunk Robot #3",
    image: "https://via.placeholder.com/300x300.png?text=NFT+3",
    owner: "0x90ab...ijkl",
    price: "0.1 ETH",
  },
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore <span className="text-indigo-400">NFTs</span>
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition duration-300"
          >
            <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{nft.name}</h2>
              <p className="text-sm text-gray-400 mb-3">Owner: {nft.owner}</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-bold">{nft.price}</span>
                <button className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
