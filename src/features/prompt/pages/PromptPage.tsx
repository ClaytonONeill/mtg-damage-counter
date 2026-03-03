// Modules
import { useState } from 'react';

// Components
import QuestionCard from '../components/QuestionCard';

// Config
import { prompts } from '../config/prompt.config';

// Types
import type { NavigationOption } from '../types/prompt.types';

export default function PromptPage() {
  // State
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const { title, description, options } = prompts[currentPromptIndex];

  // Methods
  const handleNavigation = (action: NavigationOption) => {
    setCurrentPromptIndex((prev) => {
      return action === 'back' ? prev - 1 : prev + 1;
    });
  };

  return (
    <QuestionCard
      title={title}
      description={description}
      options={options}
      handleClick={handleNavigation}
      showBackButton={Boolean(currentPromptIndex)}
    />
  );
}
