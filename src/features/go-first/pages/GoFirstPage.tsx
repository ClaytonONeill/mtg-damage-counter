// Components
import SelectionSquare from "../components/SelectionSquare";

// UI
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GoFirstPage() {
  return (
    <Card>
      <CardHeader className="text-xl font-bold">
        <CardTitle>Pick Who Goes First</CardTitle>
        <CardDescription className="text-sm">
          Each player chooses a letter on the keyboard. Then, one of those
          letters is randomly selected. That player goes first.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-3 justify-center">
        {Array.from({ length: 2 }).map(() => (
          <SelectionSquare />
        ))}
      </CardContent>
    </Card>
  );
}
