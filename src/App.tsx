// Modules
import { useState } from "react";

// Styles
import "./App.css";

// Pages
import PromptPage from "./features/prompt/pages/PromptPage";
import PlayerCustomizationPage from "./features/player-customization/pages/PlayerCustomizationPage";

// Types
import type { GameConfigOptions } from "./types/app.types";

function App() {
  // State
  const [gameConfigOptions, setGameConfigOptions] = useState<GameConfigOptions>(
    { numberOfPlayers: null, startingLife: null },
  );
  const [appView, setAppView] = useState("prompt");

  const isConfigComplete =
    gameConfigOptions.numberOfPlayers !== null &&
    gameConfigOptions.startingLife !== null;

  const determineAppView = () => {
    switch (true) {
      case appView === "prompt":
        return (
          <PromptPage
            gameConfigOptions={gameConfigOptions}
            handleSetOptions={setGameConfigOptions}
          />
        );
      case appView === "customization":
        return <PlayerCustomizationPage />;
    }
  };

  return (
    <div className="app-container">
      {isConfigComplete ? (
        <PlayerCustomizationPage />
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
