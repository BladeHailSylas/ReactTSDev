export interface Player {
  id: number;
  name: string;
  body: string;
  type: string;
  team: string;
  media: string | null;   // nullable
  awards: string[];
}