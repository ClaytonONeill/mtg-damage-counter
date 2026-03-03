// Modules
import { useState } from 'react';

// UI
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Types
import type { QuestionCardProps, OptionType } from '../types/prompt.types';

export default function QuestionCard({
  title,
  description,
  options,
  handleClick,
  showBackButton,
}: QuestionCardProps) {
  // State
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  // Methods
  const handleSelect = (option: OptionType) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  const handleGoBack = () => {
    setSelectedOption(null);
    handleClick('back');
  };

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden">
      <CardHeader>
        {/* Styled Title with bold weight */}
        <CardTitle className="text-xl font-bold tracking-tight">
          {title}
        </CardTitle>
        {/* Muted description text */}
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 bg-muted/50 p-6">
        {options.map((option) => (
          <Button
            variant={selectedOption === option ? 'default' : 'secondary'}
            className="hover:cursor-pointer"
            onClick={() => handleSelect(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex flex-row gap-3">
        {showBackButton && (
          <Button
            variant="secondary"
            className="hover:cursor-pointer"
            onClick={() => handleGoBack()}
          >
            Go Back
          </Button>
        )}
        <Button
          variant="secondary"
          className="hover:cursor-pointer"
          onClick={() => handleClick('submit')}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
