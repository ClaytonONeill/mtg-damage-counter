// GoFirstPage.tsx
import { useState } from "react";
import RandomSelectionCard from "../components/RandomSelectionCard";
import { useGame } from "@/context/useGame";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GoFirstPage() {
  const { config } = useGame();
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const playersArray = Array.from(
    { length: config.numberOfPlayers },
    (_, i) => i + 1,
  );

  const handlePickWinner = () => {
    setIsRunning(true);
    setHasRun(false);
    setWinnerIndex(null);

    const finalWinner = Math.floor(Math.random() * config.numberOfPlayers) + 1;

    const totalSpins = 3;
    const totalSteps = config.numberOfPlayers * totalSpins + (finalWinner - 1);
    const startSpeed = 100;
    const endSpeed = 500;

    const runShuffle = (step: number) => {
      const currentSelection = (step % config.numberOfPlayers) + 1;
      setHighlightIndex(currentSelection);

      if (step >= totalSteps) {
        setWinnerIndex(finalWinner);
        setHighlightIndex(null);
        setIsRunning(false);
        setHasRun(true);
        return;
      }

      const progress = step / totalSteps;
      const nextDelay = startSpeed + progress * (endSpeed - startSpeed);

      setTimeout(() => runShuffle(step + 1), nextDelay);
    };

    runShuffle(0);
  };

  return (
    <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          Who goes <span className="text-indigo-600">First?</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-6 justify-center p-6">
        {playersArray.map((playerNum) => (
          <RandomSelectionCard
            key={playerNum}
            playerNumber={playerNum}
            isWinner={winnerIndex === playerNum}
            activeHighlight={highlightIndex === playerNum}
            hasRun={hasRun}
          />
        ))}
      </CardContent>

      <CardFooter className="p-6 flex justify-center">
        <Button
          size="lg"
          onClick={handlePickWinner}
          disabled={isRunning}
          className="w-48 font-bold hover:cursor-pointer shadow-lg"
        >
          {isRunning ? "Picking..." : "GO"}
        </Button>
      </CardFooter>
    </Card>
  );
}
