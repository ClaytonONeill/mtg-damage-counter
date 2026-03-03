export type OptionType = string | number;
export type NavigationOption = 'submit' | 'back';

export interface QuestionCardProps {
  title: string;
  description: string;
  options: OptionType[];
  handleClick: (a: NavigationOption) => void;
  showBackButton: boolean;
}
