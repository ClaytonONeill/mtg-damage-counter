// Modules
import { useState, type ChangeEvent } from 'react';

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
import { Input } from '@/components/ui/input';

// Types
import type { QuestionCardProps, OptionType } from '../types/prompt.types';

export default function QuestionCard({
  title,
  description,
  options,
  handleClick,
  showBackButton,
  initialValue,
}: QuestionCardProps) {
  // State
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    initialValue ?? null,
  );
  const [customInput, setCustomInput] = useState<string>(
    typeof initialValue === 'number' && !options.includes(initialValue)
      ? String(initialValue)
      : '',
  );

  // Methods
  const handleSelect = (option: OptionType) => {
    setSelectedOption((prev) => (prev === option ? null : option));
    setCustomInput(''); // Clear custom input if a preset is picked
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numRegex = /^\d+$/;
    const { value } = e.target;

    // Validation: Only allow numeric input
    if (value !== '' && !numRegex.test(value)) return;

    setCustomInput(value);
    setSelectedOption(value === '' ? null : Number(value));
  };

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 bg-muted/50 p-6">
        {options.map((option) => (
          <Button
            key={option}
            variant={selectedOption === option ? 'default' : 'secondary'}
            className="hover:cursor-pointer"
            onClick={() => handleSelect(option)}
          >
            {option}
          </Button>
        ))}

        <Input
          id="custom-input"
          placeholder="Enter a custom value..."
          type="text"
          onFocus={() => setSelectedOption(null)}
          value={customInput}
          onChange={handleChange}
        />
      </CardContent>

      <CardFooter className="flex flex-row gap-3">
        {showBackButton && (
          <Button
            variant="secondary"
            className="hover:cursor-pointer"
            onClick={() => handleClick('back')}
          >
            Go Back
          </Button>
        )}

        <Button
          variant="default" // Changed to default to highlight the primary action
          className="ml-auto hover:cursor-pointer"
          disabled={selectedOption === null}
          onClick={() => handleClick('submit', Number(selectedOption))}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
