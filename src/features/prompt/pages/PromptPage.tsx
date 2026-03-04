// Modules
import { useState } from "react";
import { useGame } from "@/context/GameContext";

// Types
import type { GameConfigOptions } from "@/types/app.types";

// Components
import QuestionCard from "../components/QuestionCard";

// Config
import { prompts } from "../config/prompt.config";

export default function PromptPage() {
  // Hooks
  const { config, completeConfiguration } = useGame();

  // State
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [localConfig, setLocalConfig] = useState<GameConfigOptions>(config);

  const { id, title, description, options } = prompts[currentPromptIndex];

  const configKeys: (keyof GameConfigOptions)[] = [
    "numberOfPlayers",
    "startingLife",
  ];

  const handleNavigation = (action: "submit" | "back", value?: number) => {
    if (action === "submit" && value !== undefined) {
      const nextConfig = {
        ...localConfig,
        [configKeys[currentPromptIndex]]: value,
      };

      setLocalConfig(nextConfig);

      if (currentPromptIndex === prompts.length - 1) {
        completeConfiguration(nextConfig);
      } else {
        setCurrentPromptIndex((prev) => prev + 1);
      }
    } else if (action === "back") {
      setCurrentPromptIndex((prev) => prev - 1);
    }
  };

  return (
    <QuestionCard
      key={id}
      title={title}
      description={description}
      options={options}
      initialValue={localConfig[configKeys[currentPromptIndex]]}
      handleClick={handleNavigation}
      showBackButton={Boolean(currentPromptIndex)}
    />
  );
}
