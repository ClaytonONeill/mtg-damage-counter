import type { GameConfigOptions } from '@/types/app.types';

export type OptionType = string | number;
export type NavigationOption = 'submit' | 'back';

export interface PromptPageProps {
  // Added the current state so the page knows what values are already set
  gameConfigOptions: GameConfigOptions;
  // Updated to use the React State Dispatch type or a functional updater
  handleSetOptions: React.Dispatch<React.SetStateAction<GameConfigOptions>>;
}

export interface QuestionCardProps {
  title: string;
  description: string;
  options: OptionType[];
  // Updated handleClick to accept an optional value for the 'submit' action
  handleClick: (action: NavigationOption, value?: number) => void;
  showBackButton: boolean;
  // Added to allow the card to "remember" a selection if the user goes back and forward
  initialValue?: OptionType | null;
}
