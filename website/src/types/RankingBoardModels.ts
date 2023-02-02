export interface BaseScoreAttributes {
  rank: number;
  user_id: string;
  highlighted: boolean;
  username: string;
  auth_method: string;
  display_name: string;
  last_activity_date: string;
  base_date?: string;
  modified_date?: string;
}

export type RankingAttributeDetails<D> = BaseScoreAttributes & D;

export const enum LeaderboardTimeFrame {
  day = "day",
  week = "week",
  month = "month",
  total = "total",
}

export type RankingBoardResponse<K extends string, R extends BaseScoreAttributes> = {
  time_frame: LeaderboardTimeFrame;
  last_updated: string; // date time iso string
} & { [boardName in K]: R };
