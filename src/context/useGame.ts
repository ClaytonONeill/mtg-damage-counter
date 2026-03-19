// Modules
import { createContext, useContext } from "react";

// Types
import type { GameConfigOptions, Step } from "@/types/app.types";

interface GameContextType {
  step: Step;
  config: GameConfigOptions;
  setStep: (step: Step) => void;
  // This handles the transition from Prompt -> Customization
  completeConfiguration: (finalConfig: GameConfigOptions) => void;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined,
);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
