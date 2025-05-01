// unlimited.js - Dedicated file for Unlimited Mode functionality
const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <div className="mb-5 flex justify-center space-x-2">
      <a 
        href="index.html" 
        className={`px-4 py-2 rounded-full ${
          currentMode === "daily"
            ? "bg-green-500 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Daily Challenge
      </a>
      <button
        className={`px-4 py-2 rounded-full ${
          currentMode === "unlimited"
            ? "bg-green-500 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
        disabled={currentMode === "unlimited"}
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
const GuessComparisonTable = ({ guessedGames, targetGame, gameData }) => {
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

  // Helper function to get release year comparison
  const getYearComparison = (guessedYear, targetYear) => {
    if (guessedYear === targetYear) return { match: "exact", arrow: null };

    if (guessedYear < targetYear) {
      return { match: "none", arrow: "up", hint: "Guess newer games" };
    } else {
      return { match: "none", arrow: "down", hint: "Guess older games" };
    }
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

            // Special handling for release year with direction indicators
            const yearComparison = getYearComparison(
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
                    yearComparison.match
                  )}`}
                >
                  {game.releaseYear}{" "}
                  {yearComparison.arrow === "up" && (
                    <span
                      className="text-blue-400 font-bold"
                      title={yearComparison.hint}
                    >
                      <i className="fa fa-arrow-up"></i>
                    </span>
                  )}
                  {yearComparison.arrow === "down" && (
                    <span
                      className="text-blue-400 font-bold"
                      title={yearComparison.hint}
                    >
                      <i className="fa fa-arrow-down"></i>
                    </span>
                  )}
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

// Stats component for unlimited mode
const UnlimitedStats = ({ playedGames, totalGames }) => {
  // Get today's stats only
  const dateStr = new Date().toISOString().split("T")[0];
  const todaysGames = playedGames.filter((game) => game.date === dateStr);
  const todaysWon = todaysGames.filter(
    (game) => game.result === "won"
  ).length;
  const todaysLost = todaysGames.filter(
    (game) => game.result === "lost"
  ).length;
  const todaysSkipped = todaysGames.filter(
    (game) => game.result === "skipped"
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
          <span className="text-blue-400 font-bold text-xl">
            {todaysSkipped}
          </span>
          <p className="text-xs text-gray-300">Skipped</p>
        </div>
        <div>
          <span className="text-yellow-400 font-bold text-xl">
            {todaysWon + todaysLost + todaysSkipped}
          </span>
          <p className="text-xs text-gray-300">Played</p>
        </div>
        <div>
          <span className="text-purple-400 font-bold text-xl">
            {totalGames - todaysWon - todaysLost - todaysSkipped}
          </span>
          <p className="text-xs text-gray-300">Remaining</p>
        </div>
      </div>
    </div>
  );
};

// Main Unlimited Game component
const UnlimitedGame = () => {
  const [currentGame, setCurrentGame] = React.useState(null);
  const [guess, setGuess] = React.useState("");
  const [attemptsLeft, setAttemptsLeft] = React.useState(10);
  const [showHint, setShowHint] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("playing"); // 'playing', 'won', 'lost'
  const [requirementsType, setRequirementsType] = React.useState("minimum");
  const [message, setMessage] = React.useState("");
  const [messageClass, setMessageClass] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [suggestions, setSuggestions] = React.useState([]);
  const [playedGames, setPlayedGames] = React.useState(() => {
    const saved = localStorage.getItem("requiredle-played-games");
    return saved ? JSON.parse(saved) : [];
  });
  const inputRef = React.useRef(null);
  const [gameWon, setGameWon] = React.useState(null); // null, true, or false

  // Load game data from app.js
  // This would normally be imported or loaded from a shared module
  const [gameData, setGameData] = React.useState([]);
  
  // Fetch the game data from app.js
  React.useEffect(() => {
    // Create a script element to load app.js
    const script = document.createElement('script');
    script.src = 'app.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // Once loaded, the global gameData variable should be available
      if (window.gameData) {
        setGameData(window.gameData);
      } else {
        console.error("Could not load game data!");
      }
    };
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize game once gameData is available
  React.useEffect(() => {
    if (gameData.length > 0) {
      initializeUnlimitedGame();
    }
  }, [gameData]);

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

    // Reset game state
    setAttemptsLeft(10);
    setShowHint(false);
    setGameStatus("playing");
    setGuessHistory([]);
    setMessage("");
  };

  // Save played games
  React.useEffect(() => {
    localStorage.setItem(
      "requiredle-played-games",
      JSON.stringify(playedGames)
    );
  }, [playedGames]);

  // Show hint after 5 guesses
  React.useEffect(() => {
    if (attemptsLeft <= 5 && !showHint) {
      setShowHint(true);
    }
  }, [attemptsLeft, showHint]);

  // Filter suggestions based on user input
  React.useEffect(() => {
    if (!guess.trim() || gameStatus !== "playing" || !gameData.length) {
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
  }, [guess, gameStatus, guessHistory, currentGame, gameData]);

  const handleGuess = (e) => {
    e.preventDefault();
    
    if (gameStatus !== 'playing') {
      return;
    }
    
    if (!guess.trim()) {
      setMessage('Please enter a guess');
      setMessageClass('text-yellow-400');
      return;
    }
    
    const cleanGuess = guess.trim().toLowerCase();
    const correctAnswer = currentGame.title.toLowerCase();
    
    // Add to guess history
    setGuessHistory([...guessHistory, guess.trim()]);
    
    if (cleanGuess === correctAnswer) {
      // Correct guess
      setGameStatus("won");
      setGameWon(true);
      setMessage("Correct! You got it!");
      setMessageClass("text-green-400");
      
      // Calculate attempts used - make sure it's at least 1 even if won on first try
      const attemptsUsed = Math.max(1, 10 - attemptsLeft + 1);

      // Track played game
      const dateStr = new Date().toISOString().split("T")[0];
      const playedGame = {
        date: dateStr,
        gameId: currentGame.id,
        result: "won",
        attempts: attemptsUsed
      };
      
      setPlayedGames([...playedGames, playedGame]);
    } else {
      // Wrong guess
      const newAttemptsLeft = attemptsLeft - 1;
      setAttemptsLeft(newAttemptsLeft);
      
      if (newAttemptsLeft <= 0) {
        // Game over - out of attempts
        setGameStatus("lost");
        setGameWon(false);
        setMessage(`Game over! The answer was ${currentGame.title}`);
        setMessageClass("text-red-400");
        
        // Track played game
        const dateStr = new Date().toISOString().split("T")[0];
        const playedGame = {
          date: dateStr,
          gameId: currentGame.id,
          result: "lost",
          attempts: 10
        };
        
        setPlayedGames([...playedGames, playedGame]);
      } else {
        // Wrong guess but still have attempts left
        let feedback = "Incorrect guess. Try again!";
        if (newAttemptsLeft <= 5 && !showHint) {
          feedback = "Hint unlocked!";
          setShowHint(true);
        }
        setMessage(feedback);
        setMessageClass("text-yellow-400");
      }
    }
    
    setGuess('');
  };

  const handleSkip = () => {
    if (gameStatus !== "playing") {
      return;
    }

    // Track skipped game
    const dateStr = new Date().toISOString().split("T")[0];
    setPlayedGames([
      ...playedGames,
      {
        date: dateStr,
        gameId: currentGame.id,
        result: "skipped",
      },
    ]);

    // Message
    setMessage(`Skipped. The game was ${currentGame.title}`);
    setMessageClass("text-blue-400");

    // Move to next game after a short delay
    setTimeout(() => {
      initializeUnlimitedGame();
    }, 2000);
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

  const handleNextGame = () => {
    initializeUnlimitedGame();
  };

  // If game data is not loaded yet
  if (gameData.length === 0) {
    return <div className="text-center p-10 text-xl">Loading game data...</div>;
  }

  // If game is not loaded yet
  if (!currentGame && gameStatus !== "completed") {
    return <div className="text-center p-10 text-xl">Loading game...</div>;
  }

  return (
    <div className="game-container">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-green-400 mb-2">Requiredle</h1>
        <p className="mb-4">Guess the game from its system requirements!</p>

        <ModeSelector currentMode="unlimited" onModeChange={() => {}} />

        <UnlimitedStats playedGames={playedGames} totalGames={gameData.length} />
      </header>

      {gameStatus === "completed" ? (
        <div className="game-content bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Unlimited Mode Completed</h2>
          <p className="mb-6">You've played all available games for today!</p>
          <p className="text-gray-300 mb-8">
            Come back tomorrow for more games or try the daily challenge.
          </p>
          <a
            href="index.html"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
          >
            Switch to Daily Challenge
          </a>
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

          {gameStatus === "playing" && (
            <div className="mt-4 text-center">
              <button
                onClick={handleSkip}
                className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded font-medium"
              >
                Skip
              </button>
            </div>
          )}

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
                  gameData={gameData}
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

              <button
                onClick={handleNextGame}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
              >
                Next Game
              </button>
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
          Keep playing in unlimited mode or try the daily challenge!
        </p>
      </footer>
    </div>
  );
};

// Render the app
function App() {
  return (
    <div className="min-h-screen">
      <UnlimitedGame />
    </div>
  );
}

// Initialize React app
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});