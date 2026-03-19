export type GameConfigOptions = {
  numberOfPlayers: number | null;
  startingLife: number | null;
};

export type Step = "PROMPT" | "GO_FIRST" | "CUSTOMIZE" | "GAME";
