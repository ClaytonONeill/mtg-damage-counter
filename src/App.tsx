// Modules
import { useState } from 'react';

// Styles
import './App.css';

// Pages
import PromptPage from './features/prompt/pages/PromptPage';

// Types
import type { GameConfigOptions } from './types/app.types';

function App() {
  // State
  const [gameConfigOptions, setGameConfigOptions] = useState<GameConfigOptions>(
    { numberOfPlayers: null, startingLife: null },
  );

  const isConfigComplete =
    gameConfigOptions.numberOfPlayers !== null &&
    gameConfigOptions.startingLife !== null;

  return (
    <div className="app-container">
      {isConfigComplete ? (
        <>
          <h1 className="text-2xl font-bold">Game Starting Soon...</h1>
          <h2>Number of players {gameConfigOptions.numberOfPlayers}</h2>
          <h3>Starting life {gameConfigOptions.startingLife}</h3>
        </>
      ) : (
        <PromptPage
          gameConfigOptions={gameConfigOptions}
          handleSetOptions={setGameConfigOptions}
        />
      )}
    </div>
  );
}

export default App;
