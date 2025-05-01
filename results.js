// Results component and related functions
const ResultsScreen = ({ date, gameWon, attempts, maxAttempts, gameName }) => {
  // Format the date nicely
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateStr).toLocaleDateString("tr-TR", options);
  };

  // Add state for notification visibility
  const [showNotification, setShowNotification] = React.useState(false);

  // Ensure attempts is at least 1 if the game was won
  const displayAttempts = gameWon ? Math.max(1, attempts) : attempts;

  // Create visual emoji representation like Wordle
  const generateResultsEmoji = () => {
    const formattedDate = formatDate(date);
    const resultsText = `${gameName} ${formattedDate} ${
      gameWon ? displayAttempts : "X"
    }/${maxAttempts}\n\n`;

    let emojis = "";
    // Add black/yellow/green squares based on attempts
    for (let i = 0; i < maxAttempts; i++) {
      if (i === 0 && displayAttempts === 1 && gameWon) {
        // First attempt and it was correct
        emojis += "🟩"; // Green square for winning on first attempt
      } else if (i < displayAttempts - 1) {
        // Used attempts that were incorrect
        emojis += "⬛"; // Black square
      } else if (i === displayAttempts - 1 && gameWon) {
        // The winning attempt
        emojis += "🟩"; // Green square
      } else if (i < displayAttempts && !gameWon) {
        // Last attempt (failed)
        emojis += "🟥"; // Red square
      } else {
        // Unused attempts
        emojis += "⬜"; // White square
      }

      // Add line breaks for a nice grid layout (5 per row)
      if ((i + 1) % 5 === 0 && i !== maxAttempts - 1) {
        emojis += "\n";
      }
    }

    return resultsText + emojis + "\n\nhttps://requiredle.com";
  };

  const handleShare = () => {
    const results = generateResultsEmoji();
    navigator.clipboard
      .writeText(results)
      .then(() => {
        // Show notification using React state instead of DOM manipulation
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy results: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-green-400">
          Daily Challenge Completed
        </h2>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-5">Today's Results</h3>

          {gameWon ? (
            <div className="text-green-500 mb-4 font-bold text-xl">
              Success! You guessed the game in {displayAttempts}/{maxAttempts}{" "}
              attempts.
            </div>
          ) : (
            <div className="text-red-500 mb-4 font-bold text-xl">
              Game over! You used all {maxAttempts} attempts.
            </div>
          )}

          <div className="mb-6 grid grid-cols-5 gap-2 justify-center mx-auto max-w-xs">
            {[...Array(maxAttempts)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-sm ${
                  i === 0 && displayAttempts === 1 && gameWon
                    ? "bg-green-600" // First attempt win
                    : i < displayAttempts - 1
                    ? "bg-gray-800 border border-gray-600" // Used attempts (incorrect)
                    : i === displayAttempts - 1 && gameWon
                    ? "bg-green-600" // Winning attempt
                    : i < displayAttempts && !gameWon
                    ? "bg-red-600" // Failed final attempt
                    : "bg-gray-700" // Unused attempts
                }`}
              ></div>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={handleShare}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center mx-auto mb-4"
            >
              <i className="fas fa-share-alt mr-2"></i> Share Results
            </button>

            {/* Improved notification with animation and positioning */}
            <div
              className={`text-green-400 text-sm font-medium transition-opacity duration-300 mt-2 ${
                showNotification ? "opacity-100" : "opacity-0"
              }`}
            >
              Results copied to clipboard! ✓
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            A new challenge will be available tomorrow!
          </p>

          <button
            onClick={() => (window.location.href = "index.html?mode=unlimited")}
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg font-medium mb-4"
          >
            Try Unlimited Mode
          </button>
        </div>
      </div>
    </div>
  );
};

// Function to check if daily game is completed
const isDailyGameCompleted = () => {
  const dateStr = new Date().toISOString().split("T")[0];
  const savedState = localStorage.getItem(`requiredle-game-${dateStr}`);

  if (savedState) {
    const state = JSON.parse(savedState);
    return state.gameStatus === "won" || state.gameStatus === "lost";
  }

  return false;
};

// Function to get completed game data
const getCompletedGameData = () => {
  const dateStr = new Date().toISOString().split("T")[0];
  const savedState = localStorage.getItem(`requiredle-game-${dateStr}`);

  if (savedState) {
    const state = JSON.parse(savedState);

    // Ensure attempts is at least 1 for winning cases
    let attempts = 10 - state.attemptsLeft;
    if (state.gameStatus === "won" && attempts === 0) {
      attempts = 1;
    }

    return {
      date: dateStr,
      gameWon: state.gameStatus === "won",
      attempts: attempts,
      maxAttempts: 10,
      gameName: state.gameName || "Requiredle",
    };
  }

  return null;
};
