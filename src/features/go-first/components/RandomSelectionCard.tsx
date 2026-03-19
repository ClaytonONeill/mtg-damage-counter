// components/RandomSelectionCard.tsx
import { cn } from "@/lib/utils";

interface RandomSelectionCardProps {
  playerNumber: number;
  isWinner: boolean;
  activeHighlight: boolean; // We'll use this for the "active highlight" during shuffle
  hasRun: boolean;
}

export default function RandomSelectionCard({
  playerNumber,
  isWinner,
  activeHighlight,
  hasRun,
}: RandomSelectionCardProps) {
  return (
    <div
      className={cn(
        "relative transition-all duration-200 w-32",
        // Pop up and glow if it's currently being "passed over" OR if it won
        (activeHighlight || (hasRun && isWinner)) && "scale-110 z-10",
        hasRun && isWinner && "ring-4 ring-yellow-400 rounded-lg shadow-xl",
      )}
    >
      <div className="relative">
        <img
          className={cn(
            "h-48 w-full object-cover rounded-lg transition-opacity duration-500 p-1",
            // Highlight the card if it's the active one in the shuffle
            activeHighlight && "ring-4 ring-indigo-500 shadow-lg p-1",
            hasRun && !isWinner && "opacity-30 grayscale",
          )}
          src="/MTG_Card_Back.webp"
          alt="Card"
        />

        {hasRun && !isWinner && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-red-600 drop-shadow-md">
              X
            </span>
          </div>
        )}
      </div>

      <p
        className={cn(
          "text-center mt-2 font-bold transition-colors",
          isWinner && hasRun
            ? "text-yellow-500 mb-1"
            : activeHighlight
              ? "text-indigo-500"
              : "text-slate-500",
        )}
      >
        Player {playerNumber}
      </p>
    </div>
  );
}
