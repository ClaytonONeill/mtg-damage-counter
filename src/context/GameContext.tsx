// Modules
import { createContext, useContext, useState } from "react";

// Types
import type { ReactNode } from "react";
import type { GameConfigOptions } from "@/types/app.types";

export type Step = "PROMPT" | "CUSTOMIZE" | "GO_FIRST" | "GAME";

interface GameContextType {
  step: Step;
  config: GameConfigOptions;
  setStep: (step: Step) => void;
  // This handles the transition from Prompt -> Customization
  completeConfiguration: (finalConfig: GameConfigOptions) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<Step>("PROMPT");
  const [config, setConfig] = useState<GameConfigOptions>({
    numberOfPlayers: null,
    startingLife: null,
  });

  const completeConfiguration = (finalConfig: GameConfigOptions) => {
    setConfig(finalConfig);
    setStep("CUSTOMIZE"); // Automatically move to next page
  };

  return (
    <GameContext.Provider
      value={{ step, config, setStep, completeConfiguration }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
