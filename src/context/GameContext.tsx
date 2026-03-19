// Modules
import { useState } from "react";

// Types
import type { ReactNode } from "react";
import type { GameConfigOptions, Step } from "@/types/app.types";

// Context
import { GameContext } from "./useGame";

export function GameProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<Step>("PROMPT");
  const [config, setConfig] = useState<GameConfigOptions>({
    numberOfPlayers: null,
    startingLife: null,
  });

  const completeConfiguration = (finalConfig: GameConfigOptions) => {
    setConfig(finalConfig);
    setStep("CUSTOMIZE");
  };

  return (
    <GameContext.Provider
      value={{ step, config, setStep, completeConfiguration }}
    >
      {children}
    </GameContext.Provider>
  );
}
