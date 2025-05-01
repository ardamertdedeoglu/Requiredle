// Game mode handling and initialization

// Initialize daily game
const initializeDailyGame = (gameData, callbacks) => {
  const { 
    setGameIndex, 
    setCurrentGame, 
    setAttemptsLeft, 
    setShowHint, 
    setGameStatus, 
    setGuessHistory, 
    setMessage,
    setGameWon 
  } = callbacks;
  
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
  setGameWon(null);

  // Check if daily challenge is already completed
  if (isDailyGameCompleted()) {
    return false; // Don't show game UI, show results screen instead
  }

  // Load game state from localStorage
  const savedState = localStorage.getItem(`requiredle-game-${dateStr}`);
  if (savedState) {
    const state = JSON.parse(savedState);
    setAttemptsLeft(state.attemptsLeft);
    setShowHint(state.showHint);
    setGameStatus(state.gameStatus);
    setGuessHistory(state.guessHistory || []);
    setGameWon(state.gameStatus === 'won' ? true : 
              (state.gameStatus === 'lost' ? false : null));
    
    if (state.gameStatus !== "playing") {
      setMessage(
        state.gameStatus === "won"
          ? `You already won today's Requiredle! The answer was ${gameData[todayIndex].title}`
          : `You already played today's Requiredle. The answer was ${gameData[todayIndex].title}`
      );
      return false; // Show results screen instead
    }
  }
  
  return true; // Show game UI
};

// Initialize unlimited game
const initializeUnlimitedGame = (gameData, playedGames, callbacks) => {
  const {
    setCurrentGame,
    setGameIndex,
    setAttemptsLeft,
    setShowHint,
    setGameStatus,
    setGuessHistory,
    setMessage,
    setMessageClass,
    setGameWon
  } = callbacks;
  
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
    return false; // Don't show game UI
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
  setGameWon(null);
  
  return true; // Show game UI
};

// Get current game mode from URL or localStorage
const getCurrentGameMode = () => {
  // Check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  const modeParam = urlParams.get('mode');
  
  if (modeParam === 'daily' || modeParam === 'unlimited') {
    localStorage.setItem('requiredle-game-mode', modeParam);
    return modeParam;
  }
  
  // Fall back to localStorage or default
  const savedMode = localStorage.getItem('requiredle-game-mode');
  return savedMode || 'daily';
};

// Save game mode preference
const saveGameMode = (mode) => {
  localStorage.setItem('requiredle-game-mode', mode);
  
  // Update URL without reloading the page
  const url = new URL(window.location);
  url.searchParams.set('mode', mode);
  window.history.pushState({}, '', url);
};