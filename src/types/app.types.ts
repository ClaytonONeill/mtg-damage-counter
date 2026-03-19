export type GameConfigOptions = {
  numberOfPlayers: number;
  startingLife: number | null;
};

export type Step = "PROMPT" | "GO_FIRST" | "CUSTOMIZE" | "GAME";
