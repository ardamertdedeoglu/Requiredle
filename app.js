// Sample game data with enhanced details
const gameData = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Sci-Fi"],
    themes: ["Cyberpunk", "Futuristic", "Dystopian"],
    releaseYear: 2020,
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    gameModes: ["Single-player"],
    gameEngine: "REDengine 4",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    perspective: "First-person",
    franchise: "Cyberpunk",
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-3570K or AMD FX-8310",
        gpu: "NVIDIA GeForce GTX 780 3GB or AMD Radeon RX 470",
        ram: "8 GB",
        storage: "70 GB SSD",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
        gpu: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 590",
        ram: "12 GB",
        storage: "70 GB SSD",
      },
    },
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    genres: ["Action", "Adventure", "Open World", "Western"],
    themes: ["Historical", "Wild West", "Crime"],
    releaseYear: 2019,
    platforms: ["Windows", "PlayStation 4", "Xbox One"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "RAGE",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    perspective: "Third-person",
    franchise: "Red Dead",
    requirements: {
      minimum: {
        os: "Windows 7 SP1 (64-bit)",
        cpu: "Intel Core i5-2500K or AMD FX-6300",
        gpu: "NVIDIA GeForce GTX 770 2GB or AMD Radeon R9 280",
        ram: "8 GB",
        storage: "150 GB HDD",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i7-4770K or AMD Ryzen 5 1500X",
        gpu: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 480",
        ram: "12 GB",
        storage: "150 GB SSD",
      },
    },
  },
  {
    id: 3,
    title: "Elden Ring",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Fantasy", "Souls-like"],
    themes: ["Dark Fantasy", "Medieval"],
    releaseYear: 2022,
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "Custom engine",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    perspective: "Third-person",
    franchise: "New IP",
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
        gpu: "NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 580",
        ram: "12 GB",
        storage: "60 GB SSD",
      },
      recommended: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        gpu: "NVIDIA GeForce GTX 1070 8GB or AMD Radeon RX VEGA 56",
        ram: "16 GB",
        storage: "60 GB SSD",
      },
    },
  },
  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Fantasy"],
    themes: ["Fantasy", "Medieval", "Monster Hunter"],
    releaseYear: 2015,
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    gameModes: ["Single-player"],
    gameEngine: "REDengine 3",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    perspective: "Third-person",
    franchise: "The Witcher",
    requirements: {
      minimum: {
        os: "Windows 7/8/10 (64-bit)",
        cpu: "Intel CPU Core i5-2500K or AMD CPU Phenom II X4 940",
        gpu: "NVIDIA GPU GeForce GTX 660 or AMD GPU Radeon HD 7870",
        ram: "6 GB",
        storage: "35 GB",
      },
      recommended: {
        os: "Windows 7/8/10 (64-bit)",
        cpu: "Intel CPU Core i7-3770 or AMD CPU FX-8350",
        gpu: "NVIDIA GPU GeForce GTX 770 or AMD GPU Radeon R9 290",
        ram: "8 GB",
        storage: "35 GB SSD",
      },
    },
  },
  {
    id: 5,
    title: "Microsoft Flight Simulator",
    genre: "Flight Simulator",
    genres: ["Simulation", "Flight"],
    themes: ["Modern", "Realistic"],
    releaseYear: 2020,
    platforms: ["Windows", "Xbox Series X/S"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "Custom engine",
    developer: "Asobo Studio",
    publisher: "Xbox Game Studios",
    perspective: "First-person",
    franchise: "Microsoft Flight Simulator",
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel i5-4460 or AMD Ryzen 3 1200",
        gpu: "NVIDIA GTX 770 or AMD Radeon RX 570",
        ram: "8 GB",
        storage: "150 GB",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel i5-8400 or AMD Ryzen 5 1500X",
        gpu: "NVIDIA GTX 970 or AMD Radeon RX 590",
        ram: "16 GB",
        storage: "150 GB SSD",
      },
    },
  },
  {
    id: 6,
    title: "Starfield",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Sci-Fi"],
    themes: ["Space", "Futuristic", "Exploration"],
    releaseYear: 2023,
    platforms: ["Windows", "Xbox Series X/S"],
    gameModes: ["Single-player"],
    gameEngine: "Creation Engine 2",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    perspective: "First-person, Third-person",
    franchise: "New IP",
    requirements: {
      minimum: {
        os: "Windows 10 version 22H2 (64-bit)",
        cpu: "Intel Core i7-6800K or AMD Ryzen 5 2600X",
        gpu: "NVIDIA GeForce RTX 2080 or AMD Radeon RX 6800 XT",
        ram: "16 GB",
        storage: "125 GB SSD",
      },
      recommended: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Intel Core i5-10600K or AMD Ryzen 7 5800X",
        gpu: "NVIDIA GeForce RTX 3080 or AMD Radeon RX 6800 XT",
        ram: "32 GB",
        storage: "125 GB SSD",
      },
    },
  },
  {
    id: 7,
    title: "Baldur's Gate 3",
    genre: "RPG",
    genres: ["RPG", "Turn-based", "Fantasy"],
    themes: ["Fantasy", "Dungeons & Dragons", "Medieval"],
    releaseYear: 2023,
    platforms: ["Windows", "PlayStation 5", "Mac OS"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "Divinity Engine",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    perspective: "Third-person",
    franchise: "Baldur's Gate",
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-4690 or AMD FX 8350",
        gpu: "NVIDIA GTX 970 or AMD RX 480",
        ram: "8 GB",
        storage: "150 GB",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i7-8700K or AMD Ryzen 5 3600",
        gpu: "NVIDIA RTX 2060 or AMD RX 5700 XT",
        ram: "16 GB",
        storage: "150 GB SSD",
      },
    },
  },
  {
    id: 8,
    title: "Sekiro: Shadows Die Twice",
    genre: "Action-Adventure",
    genres: ["Action", "Adventure", "Soulslike", "Stealth"],
    themes: ["Samurai", "Feudal Japan", "Mythology"],
    releaseYear: 2019,
    platforms: ["Windows", "PlayStation 4", "Xbox One"],
    gameModes: ["Single-player"],
    gameEngine: "Proprietary",
    developer: "FromSoftware",
    publisher: "Activision",
    perspective: "Third-person",
    franchise: "Sekiro",
    requirements: {
      minimum: {
        os: "Windows 7 64-bit",
        cpu: "Intel Core i3-2100 or AMD FX-6300",
        gpu: "NVIDIA GeForce GTX 760 or AMD Radeon HD 7950",
        ram: "4 GB",
        storage: "25 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-2500K or AMD Ryzen 5 1400",
        gpu: "NVIDIA GeForce GTX 970 or AMD Radeon RX 570",
        ram: "8 GB",
        storage: "25 GB",
      },
    },
  },
  {
    id: 9,
    title: "Monster Hunter: World",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Co-op", "Open World"],
    themes: ["Fantasy", "Monsters", "Exploration"],
    releaseYear: 2018,
    platforms: ["Windows", "PlayStation 4", "Xbox One"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "MT Framework",
    developer: "Capcom",
    publisher: "Capcom",
    perspective: "Third-person",
    franchise: "Monster Hunter",
    requirements: {
      minimum: {
        os: "Windows 7 64-bit",
        cpu: "Intel Core i5-4460 or AMD FX-6300",
        gpu: "NVIDIA GeForce GTX 760 or AMD Radeon R7 260x",
        ram: "8 GB",
        storage: "20 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-3770 or AMD Ryzen 5 1500X",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 570",
        ram: "8 GB",
        storage: "20 GB",
      },
    },
  },
  {
    id: 10,
    title: "No Man's Sky",
    genre: "Action-Adventure",
    genres: ["Action", "Adventure", "Survival", "Exploration"],
    themes: ["Sci-Fi", "Space", "Procedural Generation"],
    releaseYear: 2016,
    platforms: ["Windows", "PlayStation 4", "Xbox One"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "Proprietary",
    developer: "Hello Games",
    publisher: "Hello Games",
    perspective: "First-person",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 7/8.1/10 (64-bit)",
        cpu: "Intel Core i3",
        gpu: "NVIDIA GTX 480, AMD Radeon 7870",
        ram: "8 GB",
        storage: "10 GB",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5",
        gpu: "NVIDIA GTX 1060, AMD Radeon RX 470",
        ram: "16 GB",
        storage: "10 GB",
      },
    },
  },
  {
    id: 11,
    title: "Valheim",
    genre: "Survival",
    genres: ["Survival", "Sandbox", "Co-op", "Open World"],
    themes: ["Norse Mythology", "Vikings", "Exploration"],
    releaseYear: 2021,
    platforms: ["Windows", "Linux", "macOS", "Xbox One", "Xbox Series X/S"],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "Unity",
    developer: "Iron Gate Studio",
    publisher: "Coffee Stain Publishing",
    perspective: "Third-person",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 7 or later",
        cpu: "2.6 GHz Dual Core",
        gpu: "GeForce GTX 500 series or similar",
        ram: "4 GB",
        storage: "1 GB",
      },
      recommended: {
        os: "Windows 7 or later",
        cpu: "i5 3GHz or better",
        gpu: "GeForce GTX 970 series or similar",
        ram: "8 GB",
        storage: "1 GB",
      },
    },
  },
  {
    id: 12,
    title: "Slay the Spire",
    genre: "Roguelike Deck-Building",
    genres: ["Roguelike", "Card Game", "Strategy"],
    themes: ["Fantasy", "Dungeon Crawling"],
    releaseYear: 2019,
    platforms: [
      "Windows",
      "macOS",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android",
    ],
    gameModes: ["Single-player"],
    gameEngine: "libGDX",
    developer: "Mega Crit",
    publisher: "Humble Bundle",
    perspective: "2D",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 7, 8, 10",
        cpu: "2.0 GHz",
        gpu: "128 MB Video Memory",
        ram: "2 GB",
        storage: "500 MB",
      },
      recommended: {
        os: "Windows 7, 8, 10",
        cpu: "3.0 GHz",
        gpu: "512 MB Video Memory",
        ram: "4 GB",
        storage: "500 MB",
      },
    },
  },
  {
    id: 13,
    title: "Clair Obscur: Expedition 33",
    genre: "Turn-Based RPG",
    genres: ["RPG", "Turn-Based", "Fantasy"],
    themes: ["Fantasy", "Exploration", "Adventure"],
    releaseYear: 2025,
    platforms: ["Windows", "PlayStation 5", "Xbox Series X/S"],
    gameModes: ["Single-player"],
    gameEngine: "Unreal Engine 5",
    developer: "Sandfall Interactive",
    publisher: "Sandfall Interactive",
    perspective: "Third-person",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        ram: "8 GB",
        storage: "50 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        gpu: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700 XT",
        ram: "16 GB",
        storage: "50 GB SSD",
      },
    },
  },
  {
    id: 14,
    title: "RuneScape: Dragonwilds",
    genre: "Survival",
    genres: ["Survival", "Co-op", "Action"],
    themes: ["Fantasy", "Dragons", "Exploration"],
    releaseYear: 2025,
    platforms: ["Windows"],
    gameModes: ["Multiplayer"],
    gameEngine: "Proprietary",
    developer: "Jagex",
    publisher: "Jagex",
    perspective: "Third-person",
    franchise: "RuneScape",
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-2500K or AMD FX-6300",
        gpu: "NVIDIA GeForce GTX 660 or AMD Radeon HD 7870",
        ram: "8 GB",
        storage: "20 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        ram: "16 GB",
        storage: "20 GB SSD",
      },
    },
  },
  {
    id: 15,
    title: "The Elder Scrolls IV: Oblivion Remastered",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Fantasy"],
    themes: ["Fantasy", "Medieval", "Magic"],
    releaseYear: 2025,
    platforms: ["Windows", "PlayStation 5", "Xbox Series X/S"],
    gameModes: ["Single-player"],
    gameEngine: "Unreal Engine 5",
    developer: "Virtuos, Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    perspective: "First-person",
    franchise: "The Elder Scrolls",
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        ram: "8 GB",
        storage: "30 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        gpu: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700 XT",
        ram: "16 GB",
        storage: "30 GB SSD",
      },
    },
  },
  {
    id: 16,
    title: "Control",
    genre: "Action-Adventure",
    genres: ["Action", "Adventure", "Supernatural", "Third-Person Shooter"],
    themes: ["Supernatural", "Mystery", "Science Fiction"],
    releaseYear: 2019,
    platforms: ["Windows", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    gameModes: ["Single-player"],
    gameEngine: "Northlight Engine",
    developer: "Remedy Entertainment",
    publisher: "505 Games",
    perspective: "Third-person",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 7, 64-bit",
        cpu: "Intel Core i5-4690 / AMD FX 4350",
        gpu: "NVIDIA GeForce GTX 780 / AMD Radeon R9 280X",
        ram: "8 GB",
        storage: "42 GB",
      },
      recommended: {
        os: "Windows 10, 64-bit",
        cpu: "Intel Core i5-7600K / AMD Ryzen 5 1600X",
        gpu: "NVIDIA GeForce GTX 1660/1060 / AMD Radeon RX 580",
        ram: "16 GB",
        storage: "42 GB SSD",
      },
    },
  },
  {
    id: 17,
    title: "Hades",
    genre: "Roguelike Action",
    genres: ["Action", "Roguelike", "Indie", "Dungeon Crawler"],
    themes: ["Greek Mythology", "Underworld", "Fantasy"],
    releaseYear: 2020,
    platforms: [
      "Windows",
      "macOS",
      "Nintendo Switch",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    gameModes: ["Single-player"],
    gameEngine: "MonoGame",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    perspective: "Isometric",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows 7 SP1",
        cpu: "Dual Core 2.4 GHz",
        gpu: "1GB VRAM / DirectX 10+ support",
        ram: "4 GB",
        storage: "15 GB",
      },
      recommended: {
        os: "Windows 7 SP1",
        cpu: "Dual Core 3.0 GHz+",
        gpu: "2GB VRAM / DirectX 10+ support",
        ram: "8 GB",
        storage: "15 GB",
      },
    },
  },
  {
    id: 18,
    title: "Horizon Zero Dawn",
    genre: "Action RPG",
    genres: ["RPG", "Action", "Open World", "Post-Apocalyptic"],
    themes: ["Sci-Fi", "Robots", "Exploration"],
    releaseYear: 2020,
    platforms: ["Windows", "PlayStation 4"],
    gameModes: ["Single-player"],
    gameEngine: "Decima",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    perspective: "Third-person",
    franchise: "Horizon",
    requirements: {
      minimum: {
        os: "Windows 10 64-bits",
        cpu: "Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz",
        gpu: "Nvidia GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4GB)",
        ram: "8 GB",
        storage: "100 GB",
      },
      recommended: {
        os: "Windows 10 64-bits",
        cpu: "Intel Core i7-4770K@3.5GHz or Ryzen 5 1500X@3.5GHz",
        gpu: "Nvidia GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8GB)",
        ram: "16 GB",
        storage: "100 GB SSD",
      },
    },
  },
  {
    id: 19,
    title: "DOOM Eternal",
    genre: "First-Person Shooter",
    genres: ["Action", "Shooter", "Fast-Paced", "Gore"],
    themes: ["Demons", "Hell", "Science Fiction"],
    releaseYear: 2020,
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "id Tech 7",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    perspective: "First-person",
    franchise: "DOOM",
    requirements: {
      minimum: {
        os: "64-bit Windows 7/64-Bit Windows 10",
        cpu: "Intel Core i5 @ 3.3 GHz or better, or AMD Ryzen 3 @ 3.1 GHz or better",
        gpu: "NVIDIA GeForce GTX 1050Ti (4GB), GTX 1060 (3GB), AMD Radeon R9 280 (3GB) or AMD Radeon R9 290 (4GB)",
        ram: "8 GB",
        storage: "50 GB",
      },
      recommended: {
        os: "64-bit Windows 10",
        cpu: "Intel Core i7-6700K or better, or AMD Ryzen 7 1800X or better",
        gpu: "NVIDIA GeForce GTX 1080 (8GB), RTX 2060 (6GB), or AMD Radeon RX Vega56 (8GB)",
        ram: "16 GB",
        storage: "50 GB SSD",
      },
    },
  },
  {
    id: 20,
    title: "Stardew Valley",
    genre: "Simulation",
    genres: ["Simulation", "RPG", "Farming", "Life Sim", "Pixel Graphics"],
    themes: ["Relaxing", "Agriculture", "Crafting", "Management"],
    releaseYear: 2016,
    platforms: [
      "Windows",
      "macOS",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android",
    ],
    gameModes: ["Single-player", "Multiplayer"],
    gameEngine: "XNA/MonoGame",
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    perspective: "Top-down",
    franchise: null,
    requirements: {
      minimum: {
        os: "Windows Vista or greater",
        cpu: "2 Ghz",
        gpu: "256 MB video memory, shader model 3.0+",
        ram: "2 GB",
        storage: "500 MB",
      },
      recommended: {
        os: "Windows 10",
        cpu: "2.8 Ghz",
        gpu: "512 MB video memory, shader model 3.0+",
        ram: "4 GB",
        storage: "500 MB",
      },
    },
  },
];

// Component for game mode selector
const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <div className="mb-5 flex justify-center space-x-2">
      <button
        className={`px-4 py-2 rounded-full ${
          currentMode === "daily"
            ? "bg-green-500 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
        onClick={() => onModeChange("daily")}
      >
        Daily Challenge
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          currentMode === "unlimited"
            ? "bg-green-500 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
        onClick={() => onModeChange("unlimited")}
      >
        Unlimited Mode
      </button>
    </div>
  );
};

// Component for displaying system requirements
const SystemRequirements = ({ requirements, type }) => {
  const reqData =
    type === "minimum" ? requirements.minimum : requirements.recommended;

  return (
    <div className="p-5 rounded-lg bg-gray-800 mb-5 system-req">
      <h3 className="text-xl font-bold mb-3 text-green-400">
        {type.charAt(0).toUpperCase() + type.slice(1)} System Requirements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-3 rounded">
          <span className="font-semibold text-yellow-300">OS:</span>{" "}
          {reqData.os}
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <span className="font-semibold text-yellow-300">CPU:</span>{" "}
          {reqData.cpu}
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <span className="font-semibold text-yellow-300">GPU:</span>{" "}
          {reqData.gpu}
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <span className="font-semibold text-yellow-300">RAM:</span>{" "}
          {reqData.ram}
        </div>
        <div className="bg-gray-700 p-3 rounded md:col-span-2">
          <span className="font-semibold text-yellow-300">Storage:</span>{" "}
          {reqData.storage}
        </div>
      </div>
    </div>
  );
};

// Component for displaying attempt indicators
const AttemptIndicator = ({ attemptsLeft, maxAttempts }) => {
  return (
    <div className="flex items-center justify-center space-x-1 my-4">
      {[...Array(maxAttempts)].map((_, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-full ${
            index < attemptsLeft ? "bg-green-500" : "bg-gray-600 attempt-used"
          } attempt-indicator`}
        ></div>
      ))}
      <span className="ml-3 text-lg">
        {attemptsLeft}/{maxAttempts} attempts left
      </span>
    </div>
  );
};

// Component for displaying hints
const Hint = ({ game, showHint }) => {
  if (!showHint) return null;

  return (
    <div className="bg-blue-900 p-5 rounded-lg my-5 hint-reveal">
      <h3 className="text-xl font-bold text-blue-300 mb-2">HINT</h3>
      <p>
        This game is a{" "}
        <span className="font-bold text-yellow-300">{game.genre}</span> released
        in <span className="font-bold text-yellow-300">{game.releaseYear}</span>
        .
      </p>
    </div>
  );
};

// Component for displaying autocomplete suggestions
const AutocompleteDropdown = ({ suggestions, onSelectSuggestion }) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="absolute w-full bg-gray-700 rounded-b mt-1 max-h-60 overflow-y-auto z-10 shadow-lg">
      {suggestions.map((game, index) => (
        <div
          key={index}
          className="p-3 hover:bg-gray-600 cursor-pointer border-b border-gray-600 transition-colors"
          onClick={() => onSelectSuggestion(game.title)}
        >
          {game.title}
        </div>
      ))}
    </div>
  );
};

// Component for displaying game attribute comparisons
const GuessComparisonTable = ({ guessedGames, targetGame }) => {
  if (!guessedGames || guessedGames.length === 0) return null;

  // Find the game object for each guessed title
  const completeGuessedGames = guessedGames.map((guessTitle) => {
    const gameObj = gameData.find(
      (game) => game.title.toLowerCase() === guessTitle.toLowerCase()
    );
    return gameObj || { title: guessTitle };
  });

  // Helper function to determine match type (exact, partial, or none)
  const getMatchType = (guessedArray, targetArray) => {
    if (!guessedArray || !targetArray) return "none";

    // Check if any element from guessedArray is in targetArray
    const hasCommonElement = guessedArray.some((item) =>
      targetArray.includes(item)
    );

    // Check if guessedArray is a subset of targetArray and has fewer elements
    const isSubset = guessedArray.every((item) => targetArray.includes(item));
    const isSmaller = guessedArray.length < targetArray.length;

    if (hasCommonElement) {
      if (isSubset && isSmaller) {
        return "partial"; // Yellow - guessed attributes are correct but target has more
      } else if (isSubset && guessedArray.length === targetArray.length) {
        return "exact"; // Green - exact match
      } else {
        return "partial"; // Yellow - some attributes match but not all
      }
    }

    return "none"; // Red - no match
  };

  // Helper function to determine match type for single values
  const getSingleValueMatchType = (guessedValue, targetValue) => {
    if (guessedValue === targetValue) return "exact";
    return "none";
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 border-b border-gray-700">
            <th className="py-2 px-3 text-left">Name</th>
            <th className="py-2 px-3 text-center">Platforms</th>
            <th className="py-2 px-3 text-center">Genres</th>
            <th className="py-2 px-3 text-center">Themes</th>
            <th className="py-2 px-3 text-center">Release Year</th>
            <th className="py-2 px-3 text-center">Game Mode</th>
            <th className="py-2 px-3 text-center">Game Engine</th>
            <th className="py-2 px-3 text-center">Developer</th>
            <th className="py-2 px-3 text-center">Perspective</th>
            <th className="py-2 px-3 text-center">Franchise</th>
          </tr>
        </thead>
        <tbody>
          {completeGuessedGames.map((game, index) => {
            // If game wasn't found in our database
            if (!game.genres || !game.platforms) {
              return (
                <tr
                  key={index}
                  className="border-b border-gray-700 text-gray-400"
                >
                  <td colSpan="10" className="py-2 px-3 text-center">
                    No data available for {game.title}
                  </td>
                </tr>
              );
            }

            // Determine matching attributes with new logic for partial matches
            const platformMatchType = getMatchType(
              game.platforms,
              targetGame.platforms
            );
            const genreMatchType = getMatchType(game.genres, targetGame.genres);
            const themeMatchType = getMatchType(game.themes, targetGame.themes);
            const releaseYearMatchType = getSingleValueMatchType(
              game.releaseYear,
              targetGame.releaseYear
            );
            const gameModeMatchType = getMatchType(
              game.gameModes,
              targetGame.gameModes
            );
            const engineMatchType = getSingleValueMatchType(
              game.gameEngine,
              targetGame.gameEngine
            );
            const developerMatchType = getSingleValueMatchType(
              game.developer,
              targetGame.developer
            );
            const perspectiveMatchType = getSingleValueMatchType(
              game.perspective,
              targetGame.perspective
            );
            const franchiseMatchType = getSingleValueMatchType(
              game.franchise,
              targetGame.franchise
            );

            // Function to get CSS class based on match type
            const getMatchClass = (matchType) => {
              switch (matchType) {
                case "exact":
                  return "bg-green-900/50";
                case "partial":
                  return "bg-yellow-900/50";
                default:
                  return "bg-red-900/30";
              }
            };

            return (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700"
              >
                <td className="py-2 px-3 font-medium">{game.title}</td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    platformMatchType
                  )}`}
                >
                  {game.platforms.join(", ")}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    genreMatchType
                  )}`}
                >
                  {game.genres.join(", ")}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    themeMatchType
                  )}`}
                >
                  {game.themes.join(", ")}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    releaseYearMatchType
                  )}`}
                >
                  {game.releaseYear}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    gameModeMatchType
                  )}`}
                >
                  {game.gameModes.join(", ")}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    engineMatchType
                  )}`}
                >
                  {game.gameEngine}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    developerMatchType
                  )}`}
                >
                  {game.developer}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    perspectiveMatchType
                  )}`}
                >
                  {game.perspective}
                </td>
                <td
                  className={`py-2 px-3 text-center ${getMatchClass(
                    franchiseMatchType
                  )}`}
                >
                  {game.franchise}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Main Game component
const RequiredleGame = () => {
  const [currentDate, setCurrentDate] = React.useState(
    new Date().toLocaleDateString()
  );
  const [gameIndex, setGameIndex] = React.useState(0);
  const [currentGame, setCurrentGame] = React.useState(null);
  const [guess, setGuess] = React.useState("");
  const [attemptsLeft, setAttemptsLeft] = React.useState(10);
  const [showHint, setShowHint] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("playing"); // 'playing', 'won', 'lost'
  const [requirementsType, setRequirementsType] = React.useState("minimum");
  const [message, setMessage] = React.useState("");
  const [messageClass, setMessageClass] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [streak, setStreak] = React.useState(() => {
    const saved = localStorage.getItem("requiredle-streak");
    return saved ? parseInt(saved) : 0;
  });
  const [suggestions, setSuggestions] = React.useState([]);
  const [gameMode, setGameMode] = React.useState("daily"); // 'daily' or 'unlimited'
  const [playedGames, setPlayedGames] = React.useState(() => {
    const saved = localStorage.getItem("requiredle-played-games");
    return saved ? JSON.parse(saved) : [];
  });
  const [gamesWon, setGamesWon] = React.useState(0);
  const [gamesLost, setGamesLost] = React.useState(0);
  const inputRef = React.useRef(null);

  // Initialize game
  React.useEffect(() => {
    if (gameMode === "daily") {
      initializeDailyGame();
    } else {
      initializeUnlimitedGame();
    }
  }, [gameMode]);

  // Initialize daily game
  const initializeDailyGame = () => {
    // Get daily game index based on date
    const dateStr = new Date().toISOString().split("T")[0];
    const dateHash = Array.from(dateStr).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    const todayIndex = dateHash % gameData.length;

    setGameIndex(todayIndex);
    setCurrentGame(gameData[todayIndex]);

    // Reset game state
    setAttemptsLeft(10);
    setShowHint(false);
    setGameStatus("playing");
    setGuessHistory([]);
    setMessage("");

    // Load game state from localStorage
    const savedState = localStorage.getItem(`requiredle-game-${dateStr}`);
    if (savedState) {
      const state = JSON.parse(savedState);
      setAttemptsLeft(state.attemptsLeft);
      setShowHint(state.showHint);
      setGameStatus(state.gameStatus);
      setGuessHistory(state.guessHistory || []);

      if (state.gameStatus !== "playing") {
        setMessage(
          state.gameStatus === "won"
            ? `You already won today's Requiredle! The answer was ${gameData[todayIndex].title}`
            : `You already played today's Requiredle. The answer was ${gameData[todayIndex].title}`
        );
      }
    }
  };

  // Initialize unlimited game
  const initializeUnlimitedGame = () => {
    // Get all available games (excluding already played games today)
    const dateStr = new Date().toISOString().split("T")[0];
    const todaysPlayedGameIds = playedGames
      .filter((game) => game.date === dateStr)
      .map((game) => game.gameId);

    const availableGames = gameData.filter(
      (game) => !todaysPlayedGameIds.includes(game.id)
    );

    if (availableGames.length === 0) {
      // No more games available for today
      setCurrentGame(null);
      setGameStatus("completed");
      setMessage(
        `You've played all available games today! Come back tomorrow for more.`
      );
      setMessageClass("text-blue-400");
      return;
    }

    // Randomly select a game from available games
    const randomIndex = Math.floor(Math.random() * availableGames.length);
    const selectedGame = availableGames[randomIndex];

    setCurrentGame(selectedGame);
    setGameIndex(selectedGame.id);

    // Reset game state
    setAttemptsLeft(10);
    setShowHint(false);
    setGameStatus("playing");
    setGuessHistory([]);
    setMessage("");
  };

  // Save game state (only for daily mode)
  React.useEffect(() => {
    if (currentGame && gameMode === "daily") {
      const dateStr = new Date().toISOString().split("T")[0];
      localStorage.setItem(
        `requiredle-game-${dateStr}`,
        JSON.stringify({
          attemptsLeft,
          showHint,
          gameStatus,
          guessHistory,
        })
      );
    }
  }, [attemptsLeft, showHint, gameStatus, guessHistory, currentGame, gameMode]);

  // Save played games
  React.useEffect(() => {
    localStorage.setItem(
      "requiredle-played-games",
      JSON.stringify(playedGames)
    );
  }, [playedGames]);

  // Save streak (only for daily mode)
  React.useEffect(() => {
    localStorage.setItem("requiredle-streak", streak.toString());
  }, [streak]);

  // Show hint after 5 guesses
  React.useEffect(() => {
    if (attemptsLeft <= 5 && !showHint) {
      setShowHint(true);
    }
  }, [attemptsLeft, showHint]);

  // Filter suggestions based on user input
  React.useEffect(() => {
    if (!guess.trim() || gameStatus !== "playing") {
      setSuggestions([]);
      return;
    }

    const userInput = guess.trim().toLowerCase();
    // Filter games that include the user input (partial matching) and exclude the current game
    // Also exclude games already guessed
    const filteredSuggestions = gameData.filter((game) => {
      const gameTitle = game.title.toLowerCase();
      const alreadyGuessed = guessHistory.some(
        (prevGuess) => prevGuess.toLowerCase() === gameTitle
      );

      return gameTitle.includes(userInput) && !alreadyGuessed;
    });

    setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to 5 suggestions
  }, [guess, gameStatus, guessHistory, currentGame]);

  const handleGuess = (e) => {
    e.preventDefault();

    if (gameStatus !== "playing") {
      return;
    }

    if (!guess.trim()) {
      setMessage("Please enter a guess");
      setMessageClass("text-yellow-400");
      return;
    }

    const cleanGuess = guess.trim().toLowerCase();
    const correctAnswer = currentGame.title.toLowerCase();

    // Add to guess history
    setGuessHistory([...guessHistory, guess.trim()]);

    if (cleanGuess === correctAnswer) {
      // Correct guess
      setGameStatus("won");
      setMessage("Correct! You got it!");
      setMessageClass("text-green-400");

      // Track played game
      const dateStr = new Date().toISOString().split("T")[0];
      setPlayedGames([
        ...playedGames,
        {
          date: dateStr,
          gameId: currentGame.id,
          result: "won",
          attempts: 10 - attemptsLeft + 1,
        },
      ]);

      // Update stats
      setGamesWon((prev) => prev + 1);

      // Update streak (only in daily mode)
      if (gameMode === "daily") {
        setStreak((prev) => prev + 1);
      }
    } else {
      // Wrong guess
      const newAttemptsLeft = attemptsLeft - 1;
      setAttemptsLeft(newAttemptsLeft);

      if (newAttemptsLeft === 0) {
        // Game over
        setGameStatus("lost");
        setMessage(`Game over! The correct answer was ${currentGame.title}`);
        setMessageClass("text-red-400");

        // Track played game
        const dateStr = new Date().toISOString().split("T")[0];
        setPlayedGames([
          ...playedGames,
          {
            date: dateStr,
            gameId: currentGame.id,
            result: "lost",
            attempts: 10,
          },
        ]);

        // Update stats
        setGamesLost((prev) => prev + 1);

        // Reset streak (only in daily mode)
        if (gameMode === "daily") {
          setStreak(0);
        }
      } else {
        // Continue game
        setMessage("Incorrect guess. Try again!");
        setMessageClass("text-red-400");
      }
    }

    setGuess("");
  };

  const handleSelectSuggestion = (selectedTitle) => {
    setGuess(selectedTitle);
    setSuggestions([]); // Clear suggestions after selection
    // Focus back on input for better UX
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const toggleRequirementsType = () => {
    setRequirementsType((prevType) =>
      prevType === "minimum" ? "recommended" : "minimum"
    );
  };

  const handleModeChange = (mode) => {
    if (mode === gameMode) return;

    setGameMode(mode);
    // Game initialization will happen in the useEffect
  };

  const handleNextGame = () => {
    initializeUnlimitedGame();
  };

  // Stats component for unlimited mode
  const UnlimitedStats = () => {
    // Get today's stats only
    const dateStr = new Date().toISOString().split("T")[0];
    const todaysGames = playedGames.filter((game) => game.date === dateStr);
    const todaysWon = todaysGames.filter(
      (game) => game.result === "won"
    ).length;
    const todaysLost = todaysGames.filter(
      (game) => game.result === "lost"
    ).length;

    return (
      <div className="bg-gray-700 p-3 rounded-lg text-center mb-4">
        <h3 className="text-blue-300 font-bold mb-2">Today's Stats</h3>
        <div className="flex justify-center space-x-4">
          <div>
            <span className="text-green-400 font-bold text-xl">
              {todaysWon}
            </span>
            <p className="text-xs text-gray-300">Won</p>
          </div>
          <div>
            <span className="text-red-400 font-bold text-xl">{todaysLost}</span>
            <p className="text-xs text-gray-300">Lost</p>
          </div>
          <div>
            <span className="text-yellow-400 font-bold text-xl">
              {todaysWon + todaysLost}
            </span>
            <p className="text-xs text-gray-300">Played</p>
          </div>
          <div>
            <span className="text-blue-400 font-bold text-xl">
              {gameData.length - todaysWon - todaysLost}
            </span>
            <p className="text-xs text-gray-300">Remaining</p>
          </div>
        </div>
      </div>
    );
  };

  // If game is not loaded yet
  if (!currentGame && gameStatus !== "completed") {
    return <div className="text-center p-10 text-xl">Loading game...</div>;
  }

  return (
    <div className="game-container">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-green-400 mb-2">Requiredle</h1>
        <p className="mb-4">Guess the game from its system requirements!</p>

        <ModeSelector currentMode={gameMode} onModeChange={handleModeChange} />

        {gameMode === "daily" ? (
          <div className="bg-gray-800 inline-block px-4 py-2 rounded-lg">
            <span className="text-sm mr-2">Today's Challenge:</span>
            <span className="font-bold">{currentDate}</span>
            {streak > 0 && (
              <span className="ml-3 bg-yellow-600 px-2 py-1 rounded text-xs font-bold">
                Streak: {streak}
              </span>
            )}
          </div>
        ) : (
          <UnlimitedStats />
        )}
      </header>

      {gameStatus === "completed" ? (
        <div className="game-content bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Unlimited Mode Completed</h2>
          <p className="mb-6">You've played all available games for today!</p>
          <p className="text-gray-300 mb-8">
            Come back tomorrow for more games or try the daily challenge.
          </p>
          <button
            onClick={() => handleModeChange("daily")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
          >
            Switch to Daily Challenge
          </button>
        </div>
      ) : (
        <div className="game-content bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Identify This Game</h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
              onClick={toggleRequirementsType}
            >
              Show {requirementsType === "minimum" ? "Recommended" : "Minimum"}{" "}
              Requirements
            </button>
          </div>

          <SystemRequirements
            requirements={currentGame.requirements}
            type={requirementsType}
          />

          <Hint game={currentGame} showHint={showHint} />

          <AttemptIndicator attemptsLeft={attemptsLeft} maxAttempts={10} />

          {message && (
            <div className={`my-4 p-3 rounded font-medium ${messageClass}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleGuess} className="mt-6">
            <div className="relative">
              <div className="flex">
                <input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  disabled={gameStatus !== "playing"}
                  placeholder="Enter your guess..."
                  ref={inputRef}
                  className="flex-grow p-3 rounded-l bg-gray-700 border-2 border-gray-600 focus:outline-none focus:border-green-500"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={gameStatus !== "playing"}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-r font-bold disabled:opacity-50"
                >
                  Guess
                </button>
              </div>

              <AutocompleteDropdown
                suggestions={suggestions}
                onSelectSuggestion={handleSelectSuggestion}
              />
            </div>
          </form>

          {guessHistory.length > 0 && (
            <>
              <div className="mt-4 mb-2">
                <h3 className="text-lg font-semibold text-yellow-300 mb-1">
                  Guess History
                </h3>
                <div className="flex flex-wrap gap-2">
                  {guessHistory.map((prevGuess, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {prevGuess}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 mb-2">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">
                  Game Comparisons
                </h3>
                <div className="flex gap-4 mb-3 justify-center text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-900/50 mr-2"></div>
                    <span>Exact match</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-900/50 mr-2"></div>
                    <span>Partial match</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-900/30 mr-2"></div>
                    <span>No match</span>
                  </div>
                </div>
                <GuessComparisonTable
                  guessedGames={guessHistory}
                  targetGame={currentGame}
                />
              </div>
            </>
          )}

          {gameStatus !== "playing" && (
            <div className="mt-6 text-center">
              <p className="mb-3">
                {gameStatus === "won"
                  ? "Congratulations! 🎉"
                  : "Better luck next time!"}
              </p>

              {gameMode === "daily" ? (
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
                >
                  Refresh
                </button>
              ) : (
                <button
                  onClick={handleNextGame}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
                >
                  Next Game
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Requiredle - A game about guessing video games from system
          requirements.
        </p>
        <p className="mt-2">
          {gameMode === "daily"
            ? "Come back tomorrow for a new challenge!"
            : "Keep playing in unlimited mode!"}
        </p>
      </footer>
    </div>
  );
};

// Render the app
function App() {
  return (
    <div className="min-h-screen">
      <RequiredleGame />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
