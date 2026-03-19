export type GameConfigOptions = {
  numberOfPlayers: number | null;
  startingLife: number | null;
};

export type Step = "PROMPT" | "CUSTOMIZE" | "GO_FIRST" | "GAME";
