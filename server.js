const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Persistent storage file
const DB_FILE = path.join(__dirname, 'nfts.json');

// Initial Curated Genesis Drops
const INITIAL_NFTS = [
  {
    id: "genesis-001",
    title: "Cyber Samurai 2099 #042",
    creator: "0xNeoViper...7F81",
    owner: "0xNeoViper...7F81",
    price: 3.45,
    highestBid: 3.45,
    bidder: "0xKage...8821",
    category: "cyberpunk",
    rarity: "Mythic",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    description: "Forged in the neon gutters of Neo-Shibuya, a legendary robotic ronin infused with quantum synthetic soul cores.",
    history: [
      { event: "Minted", price: 2.10, from: "0xGenesis", to: "0xNeoViper...7F81", date: "2 days ago" },
      { event: "Bid Placed", price: 3.45, from: "0xKage...8821", to: "Escrow", date: "1 hour ago" }
    ],
    views: 1420,
    likes: 384,
    tags: ["Cyberpunk", "Katana", "Synthetic", "Mythic"]
  },
  {
    id: "genesis-002",
    title: "Celestial Oracle: Nebula-X",
    creator: "0xStarGazer...339A",
    owner: "0xStarGazer...339A",
    price: 5.80,
    highestBid: 5.80,
    bidder: "0xApexWhale...99B4",
    category: "space",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
    description: "Multidimensional divine entity channeling deep cosmic radio bursts across distant spiral galaxies.",
    history: [
      { event: "Minted", price: 4.50, from: "0xGenesis", to: "0xStarGazer...339A", date: "3 days ago" },
      { event: "Bid Placed", price: 5.80, from: "0xApexWhale...99B4", to: "Escrow", date: "4 hours ago" }
    ],
    views: 2890,
    likes: 812,
    tags: ["Space", "Cosmic", "Astral", "Legendary"]
  },
  {
    id: "genesis-003",
    title: "Ethereal Chroma Prism #11",
    creator: "0xPrismWorks...5A22",
    owner: "0xPrismWorks...5A22",
    price: 1.75,
    highestBid: 1.75,
    bidder: "0xVelvet...41C0",
    category: "abstract",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800&auto=format&fit=crop&q=80",
    description: "Liquid iridescent glass simulation generating holographic light refraction patterns.",
    history: [
      { event: "Minted", price: 1.20, from: "0xGenesis", to: "0xPrismWorks...5A22", date: "1 day ago" }
    ],
    views: 940,
    likes: 215,
    tags: ["3D", "Abstract", "Chroma", "Glass"]
  },
  {
    id: "genesis-004",
    title: "Mecha Titan: Dreadnought 07",
    creator: "0xIronHeart...9D11",
    owner: "0xIronHeart...9D11",
    price: 8.20,
    highestBid: 8.20,
    bidder: "0xTitanCollector...00A3",
    category: "cyberpunk",
    rarity: "Mythic",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
    description: "Heavy orbital combat exo-frame equipped with plasma cannons and self-repairing nanite shields.",
    history: [
      { event: "Minted", price: 6.00, from: "0xGenesis", to: "0xIronHeart...9D11", date: "5 days ago" },
      { event: "Bid Placed", price: 8.20, from: "0xTitanCollector...00A3", to: "Escrow", date: "20 mins ago" }
    ],
    views: 4120,
    likes: 1205,
    tags: ["Mecha", "Sci-Fi", "Armor", "Heavy"]
  },
  {
    id: "genesis-005",
    title: "Solar Flare Deity #09",
    creator: "0xSolKeeper...7B44",
    owner: "0xSolKeeper...7B44",
    price: 2.95,
    highestBid: 2.95,
    bidder: "0xHelios...313F",
    category: "anime",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    description: "Incarnation of stellar solar energy with golden corona wings and celestial flame aura.",
    history: [
      { event: "Minted", price: 2.00, from: "0xGenesis", to: "0xSolKeeper...7B44", date: "12 hours ago" }
    ],
    views: 1105,
    likes: 340,
    tags: ["Solar", "Fire", "Gold", "Anime"]
  },
  {
    id: "genesis-006",
    title: "Quantum Glitch Matrix #303",
    creator: "0xZeroDay...1337",
    owner: "0xZeroDay...1337",
    price: 4.10,
    highestBid: 4.10,
    bidder: "0xBinaryGhost...2222",
    category: "abstract",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80",
    description: "An encrypted anomaly that escaped the decentralized memory blocks of the mainnet.",
    history: [
      { event: "Minted", price: 3.00, from: "0xGenesis", to: "0xZeroDay...1337", date: "4 days ago" }
    ],
    views: 2240,
    likes: 677,
    tags: ["Glitch", "Matrix", "Hacker", "Vaporwave"]
  }
];

function loadNFTs() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_NFTS, null, 2));
    return INITIAL_NFTS;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_NFTS;
  }
}

function saveNFTs(nfts) {
  fs.writeFileSync(DB_FILE, JSON.stringify(nfts, null, 2));
}

// API Routes
app.get('/api/nfts', (req, res) => {
  const nfts = loadNFTs();
  res.json({ success: true, data: nfts });
});

app.post('/api/mint', (req, res) => {
  const { title, description, category, rarity, price, image, creator } = req.body;
  if (!title || !price || !image) {
    return res.status(400).json({ success: false, error: 'Missing required minting parameters' });
  }

  const nfts = loadNFTs();
  const newNFT = {
    id: `nft-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    title,
    description: description || 'Exclusive minted collectible on AURA NFT Platform.',
    category: category || 'cyberpunk',
    rarity: rarity || 'Rare',
    price: parseFloat(price) || 0.1,
    highestBid: parseFloat(price) || 0.1,
    creator: creator || '0xUser...MyWallet',
    owner: creator || '0xUser...MyWallet',
    bidder: null,
    image,
    views: 1,
    likes: 0,
    tags: [category || 'Art', rarity || 'Rare', 'Minted'],
    history: [
      {
        event: 'Minted',
        price: parseFloat(price) || 0.1,
        from: '0x0000000000000000000000000000000000000000 (Genesis)',
        to: creator || '0xUser...MyWallet',
        date: 'Just now'
      }
    ]
  };

  nfts.unshift(newNFT);
  saveNFTs(nfts);

  res.json({ success: true, nft: newNFT });
});

app.post('/api/bid', (req, res) => {
  const { id, bidAmount, bidder } = req.body;
  const nfts = loadNFTs();
  const nft = nfts.find(n => n.id === id);

  if (!nft) {
    return res.status(404).json({ success: false, error: 'NFT not found' });
  }

  const amount = parseFloat(bidAmount);
  if (isNaN(amount) || amount <= nft.highestBid) {
    return res.status(400).json({ success: false, error: `Bid must be higher than current highest bid (${nft.highestBid} ETH)` });
  }

  nft.highestBid = amount;
  nft.bidder = bidder || '0xAnonymousBidder';
  nft.history.unshift({
    event: 'Bid Placed',
    price: amount,
    from: bidder || '0xAnonymousBidder',
    to: 'Smart Contract Escrow',
    date: 'Just now'
  });

  saveNFTs(nfts);
  res.json({ success: true, nft });
});

app.post('/api/buy', (req, res) => {
  const { id, buyer } = req.body;
  const nfts = loadNFTs();
  const nft = nfts.find(n => n.id === id);

  if (!nft) {
    return res.status(404).json({ success: false, error: 'NFT not found' });
  }

  const previousOwner = nft.owner;
  nft.owner = buyer || '0xNewCollector';
  nft.history.unshift({
    event: 'Sold',
    price: nft.price,
    from: previousOwner,
    to: buyer || '0xNewCollector',
    date: 'Just now'
  });

  saveNFTs(nfts);
  res.json({ success: true, nft });
});

app.post('/api/like', (req, res) => {
  const { id } = req.body;
  const nfts = loadNFTs();
  const nft = nfts.find(n => n.id === id);
  if (nft) {
    nft.likes = (nft.likes || 0) + 1;
    saveNFTs(nfts);
    return res.json({ success: true, likes: nft.likes });
  }
  res.status(404).json({ success: false, error: 'NFT not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 AURA NFT Marketplace running live on http://localhost:${PORT}`);
});
