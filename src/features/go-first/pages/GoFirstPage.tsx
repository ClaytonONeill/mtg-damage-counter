// Components
import RandomSelectionCard from "../components/RandomSelectionCard";

// UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GoFirstPage() {
  return (
    <Card className="pb-0">
      <CardHeader className="text-xl font-bold">
        <CardTitle>Pick Who Goes First</CardTitle>
        <CardDescription className="text-sm">
          Click <b className="text-indigo-600">GO</b> and a player will be
          chosen at random to go first.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-3 justify-center">
        {Array.from({ length: 2 }).map(() => (
          <RandomSelectionCard />
        ))}
      </CardContent>
      <CardFooter className="flex flex-row gap-3 justify-center bg-muted/50 p-2 ">
        <Button className="hover:cursor-pointer">GO</Button>
      </CardFooter>
    </Card>
  );
}
