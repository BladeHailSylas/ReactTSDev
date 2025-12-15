export interface MatchDto {
  id: number;
  teamA: string;
  teamB: string;
  homePercent: number;
  awayPercent: number;
  matchDate: string;
  description: string;
  predictionOpen: boolean;
  alreadyPredicted: boolean;
  yourPrevResult: string;
}
