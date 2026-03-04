// Modules
import { useState } from 'react';

// Components
import QuestionCard from '../components/QuestionCard';

// Config
import { prompts } from '../config/prompt.config';

// Types
import type { PromptPageProps, NavigationOption } from '../types/prompt.types';
import type { GameConfigOptions } from '@/types/app.types';

export default function PromptPage({
  handleSetOptions,
  gameConfigOptions,
}: PromptPageProps) {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const { id, title, description, options } = prompts[currentPromptIndex];

  // Map index to the keys in GameConfigOptions type
  const configKeys: (keyof GameConfigOptions)[] = [
    'numberOfPlayers',
    'startingLife',
  ];

  const handleNavigation = (action: NavigationOption, value?: number) => {
    if (action === 'submit' && value !== undefined) {
      handleSetOptions((prev) => ({
        ...prev,
        [configKeys[currentPromptIndex]]: value,
      }));

      setCurrentPromptIndex((prev) => prev + 1);
    } else if (action === 'back') {
      setCurrentPromptIndex((prev) => prev - 1);
    }
  };

  return (
    <QuestionCard
      key={id}
      title={title}
      description={description}
      options={options}
      initialValue={gameConfigOptions[configKeys[currentPromptIndex]]}
      handleClick={handleNavigation}
      showBackButton={Boolean(currentPromptIndex)}
    />
  );
}
