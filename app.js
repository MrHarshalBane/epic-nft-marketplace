// AURA Decentralized NFT Marketplace Client Engine
const STORAGE_KEY = 'aura_nft_marketplace_items';

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
    price: 1.25,
    highestBid: 1.40,
    bidder: "0xColorWave...113C",
    category: "abstract",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
    description: "Optical physics anomaly translated into a vibrating frequency array of chromatic oil gradients.",
    history: [
      { event: "Minted", price: 0.90, from: "0xGenesis", to: "0xPrismWorks...5A22", date: "5 days ago" },
      { event: "Bid Placed", price: 1.40, from: "0xColorWave...113C", to: "Escrow", date: "2 hours ago" }
    ],
    views: 940,
    likes: 215,
    tags: ["Abstract", "Chroma", "Geometric", "Rare"]
  },
  {
    id: "genesis-004",
    title: "Valkyrie of Solitude #07",
    creator: "0xValkyria...EE91",
    owner: "0xValkyria...EE91",
    price: 4.20,
    highestBid: 4.20,
    bidder: "0xNorseLord...44D1",
    category: "mythic",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
    description: "Ascended battle maiden guardian of the celestial bridge between Asgard and the mortal realm.",
    history: [
      { event: "Minted", price: 3.00, from: "0xGenesis", to: "0xValkyria...EE91", date: "1 week ago" }
    ],
    views: 1890,
    likes: 540,
    tags: ["Mythology", "Valkyrie", "Norse", "Legendary"]
  },
  {
    id: "genesis-005",
    title: "Neo Tokyo Drifter V8",
    creator: "0xTurboGhost...9A10",
    owner: "0xTurboGhost...9A10",
    price: 2.15,
    highestBid: 2.30,
    bidder: "0xMidnightRacer",
    category: "cyberpunk",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80",
    description: "Midnight hyper-tuned hovercraft tailored for illegal underground sprints along the Bay Bridge.",
    history: [
      { event: "Minted", price: 1.80, from: "0xGenesis", to: "0xTurboGhost...9A10", date: "4 days ago" }
    ],
    views: 1100,
    likes: 310,
    tags: ["Cyberpunk", "Drifter", "Hypercar", "Rare"]
  },
  {
    id: "genesis-006",
    title: "Supernova Remnant Core",
    creator: "0xStarGazer...339A",
    owner: "0xStarGazer...339A",
    price: 8.50,
    highestBid: 8.50,
    bidder: "0xQuantumCap",
    category: "space",
    rarity: "Mythic",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description: "Compressed gravitational singlarity extracted from the heart of a collapsed stellar nursery.",
    history: [
      { event: "Minted", price: 6.00, from: "0xGenesis", to: "0xStarGazer...339A", date: "1 day ago" }
    ],
    views: 4500,
    likes: 1240,
    tags: ["Space", "Supernova", "Singularity", "Mythic"]
  },
  {
    id: "genesis-007",
    title: "Hypercube Paradox #404",
    creator: "0xPrismWorks...5A22",
    owner: "0xPrismWorks...5A22",
    price: 1.80,
    highestBid: 1.80,
    bidder: null,
    category: "abstract",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80",
    description: "Four-dimensional geometric tessellation bending Euclidean perspectives through recursive light folds.",
    history: [
      { event: "Minted", price: 1.50, from: "0xGenesis", to: "0xPrismWorks...5A22", date: "6 days ago" }
    ],
    views: 750,
    likes: 195,
    tags: ["Abstract", "Hypercube", "Geometry", "Rare"]
  },
  {
    id: "genesis-008",
    title: "Odin's Ravens: Thought & Memory",
    creator: "0xValkyria...EE91",
    owner: "0xValkyria...EE91",
    price: 6.20,
    highestBid: 6.20,
    bidder: "0xAsgardWhale",
    category: "mythic",
    rarity: "Mythic",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    description: "Huginn and Muninn soaring through the branches of Yggdrasil bearing prophecy from the Nine Realms.",
    history: [
      { event: "Minted", price: 4.80, from: "0xGenesis", to: "0xValkyria...EE91", date: "3 days ago" }
    ],
    views: 3200,
    likes: 920,
    tags: ["Mythology", "Odin", "Ravens", "Mythic"]
  }
];

let currentCategory = 'all';
let currentNFTs = [];
let activeNFT = null;
let currentWallet = '0x742d...f44e';

// Load NFTs
function getNFTs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Storage read error:', e);
  }
  return [...INITIAL_NFTS];
}

function saveNFTs(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('Storage write error:', e);
  }
}

// Initial bootstrap
document.addEventListener('DOMContentLoaded', () => {
  currentNFTs = getNFTs();
  renderNFTs();
  lucide.createIcons();
});

// Render Showcase Grid
function renderNFTs() {
  const grid = document.getElementById('nftGrid');
  const emptyState = document.getElementById('emptyState');
  const search = document.getElementById('searchInput').value.trim().toLowerCase();
  const sort = document.getElementById('sortSelect').value;

  let filtered = currentNFTs.filter(item => {
    const matchCategory = (currentCategory === 'all' || item.category === currentCategory);
    const matchSearch = !search ||
      item.title.toLowerCase().includes(search) ||
      item.creator.toLowerCase().includes(search) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(search)));
    return matchCategory && matchSearch;
  });

  // Sort
  if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'popular') filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));

  grid.innerHTML = '';
  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    filtered.forEach(item => {
      const card = createNFTCard(item);
      grid.appendChild(card);
    });
  }

  // Update volume & listed counts
  const totalVolume = currentNFTs.reduce((acc, n) => acc + (n.highestBid || n.price || 0), 0);
  document.getElementById('statVolume').textContent = `${totalVolume.toFixed(1)} ETH`;
  document.getElementById('statListed').textContent = `${currentNFTs.length} Drops`;

  lucide.createIcons();
}

function createNFTCard(item) {
  const card = document.createElement('div');
  card.className = 'glass-card rounded-2xl overflow-hidden group hover:translate-y-[-4px] transition duration-300 cursor-pointer flex flex-col';
  card.onclick = () => openDetailModal(item.id);

  const rarityColor = item.rarity === 'Mythic' ? 'text-pink-400 bg-pink-500/10 border-pink-500/30' :
    item.rarity === 'Legendary' ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' :
    'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';

  card.innerHTML = `
    <div class="relative aspect-square overflow-hidden bg-black/50">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
      <div class="absolute top-3 left-3">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono border ${rarityColor}">
          ${item.rarity}
        </span>
      </div>
      <button onclick="event.stopPropagation(); toggleLike('${item.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-pink-500 transition">
        <i data-lucide="heart" class="w-4 h-4"></i>
      </button>
      <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-gray-300 flex items-center gap-1">
        <i data-lucide="eye" class="w-3 h-3"></i> ${item.views || 1}
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <span class="text-[11px] text-gray-400 font-mono block mb-1">Created by ${item.creator}</span>
        <h3 class="text-base font-bold text-white group-hover:text-purple-400 transition leading-snug line-clamp-1">${item.title}</h3>
      </div>
      <div class="pt-4 mt-4 border-t border-auraBorder flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">Highest Bid</span>
          <span class="text-sm font-bold font-mono text-cyan-400">${item.highestBid || item.price} ETH</span>
        </div>
        <button class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white transition">
          View Drop
        </button>
      </div>
    </div>
  `;
  return card;
}

// Category filter switch
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-chip').forEach(btn => {
    btn.classList.remove('active', 'bg-purple-600', 'text-white');
    btn.classList.add('bg-auraCard', 'text-gray-400');
  });

  const activeBtn = Array.from(document.querySelectorAll('.cat-chip')).find(b => b.textContent.toLowerCase().includes(cat === 'all' ? 'all' : cat));
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-purple-600', 'text-white');
    activeBtn.classList.remove('bg-auraCard', 'text-gray-400');
  }

  renderNFTs();
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'newest';
  setCategory('all');
}

document.getElementById('searchInput')?.addEventListener('input', renderNFTs);

// Like toggle
function toggleLike(id) {
  const item = currentNFTs.find(n => n.id === id);
  if (item) {
    item.likes = (item.likes || 0) + 1;
    saveNFTs(currentNFTs);
    renderNFTs();
    showToast(`Liked ${item.title}!`);
  }
}

// Detail & Bidding Modal
function openDetailModal(id) {
  const item = currentNFTs.find(n => n.id === id);
  if (!item) return;

  activeNFT = item;
  item.views = (item.views || 0) + 1;
  saveNFTs(currentNFTs);

  document.getElementById('modalImage').src = item.image;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalDesc').textContent = item.description;
  document.getElementById('modalRarity').textContent = item.rarity;
  document.getElementById('modalHighestBid').textContent = `${item.highestBid} ETH`;
  document.getElementById('modalPrice').textContent = `${item.price} ETH`;
  document.getElementById('modalOwner').textContent = `Owned by: ${item.owner || item.creator}`;
  document.getElementById('bidInput').value = (item.highestBid + 0.1).toFixed(2);

  // Render History
  const historyBox = document.getElementById('modalHistory');
  historyBox.innerHTML = '';
  (item.history || []).forEach(h => {
    const row = document.createElement('div');
    row.className = 'flex justify-between items-center text-xs p-2 rounded-lg bg-white/[0.02] border border-auraBorder font-mono';
    row.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-semibold">${h.event}</span>
        <span class="text-gray-300">${h.price} ETH</span>
      </div>
      <span class="text-gray-500 text-[11px]">${h.date}</span>
    `;
    historyBox.appendChild(row);
  });

  document.getElementById('detailModal').classList.remove('hidden');
  lucide.createIcons();
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.add('hidden');
  activeNFT = null;
}

// Submit Bid
function submitBid() {
  if (!activeNFT) return;
  const bidInput = document.getElementById('bidInput');
  const amount = parseFloat(bidInput.value);

  if (isNaN(amount) || amount <= activeNFT.highestBid) {
    alert(`Bid amount must be strictly higher than current highest bid (${activeNFT.highestBid} ETH)`);
    return;
  }

  activeNFT.highestBid = amount;
  activeNFT.bidder = currentWallet;
  activeNFT.history = activeNFT.history || [];
  activeNFT.history.unshift({
    event: 'Bid Placed',
    price: amount,
    from: currentWallet,
    to: 'Smart Contract Escrow',
    date: 'Just now'
  });

  saveNFTs(currentNFTs);
  renderNFTs();
  openDetailModal(activeNFT.id);

  confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  showToast(`Bid of ${amount} ETH successfully submitted to Escrow!`);
}

// Instant Buy
function submitBuyNow() {
  if (!activeNFT) return;
  const prevOwner = activeNFT.owner || activeNFT.creator;

  activeNFT.owner = currentWallet;
  activeNFT.history = activeNFT.history || [];
  activeNFT.history.unshift({
    event: 'Sold',
    price: activeNFT.price,
    from: prevOwner,
    to: currentWallet,
    date: 'Just now'
  });

  saveNFTs(currentNFTs);
  renderNFTs();
  closeDetailModal();

  confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
  showToast(`Congratulations! You acquired ${activeNFT.title}!`);
}

// Mint Modal
function openMintModal() {
  document.getElementById('mintModal').classList.remove('hidden');
}

function closeMintModal() {
  document.getElementById('mintModal').classList.add('hidden');
}

function handleMintSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('mintTitle').value.trim();
  const image = document.getElementById('mintImage').value.trim();
  const category = document.getElementById('mintCategory').value;
  const rarity = document.getElementById('mintRarity').value;
  const price = parseFloat(document.getElementById('mintPrice').value);
  const desc = document.getElementById('mintDesc').value.trim() || 'Exclusive minted collectible on AURA NFT Platform.';

  if (!title || !image || isNaN(price)) return;

  const newNFT = {
    id: `nft-${Date.now()}`,
    title,
    description: desc,
    category,
    rarity,
    price,
    highestBid: price,
    creator: currentWallet,
    owner: currentWallet,
    bidder: null,
    image,
    views: 1,
    likes: 0,
    tags: [category, rarity, 'Genesis'],
    history: [
      {
        event: 'Minted',
        price,
        from: '0x0000...0000 (Genesis)',
        to: currentWallet,
        date: 'Just now'
      }
    ]
  };

  currentNFTs.unshift(newNFT);
  saveNFTs(currentNFTs);
  renderNFTs();

  closeMintModal();
  document.getElementById('mintForm').reset();

  confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
  showToast(`Successfully minted "${title}" to the blockchain!`);
}

// Wallet connection simulator
function toggleWallet() {
  if (currentWallet) {
    showToast('Connected as: ' + currentWallet);
  }
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3000);
}
