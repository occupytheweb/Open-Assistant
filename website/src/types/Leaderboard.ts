import { RankingAttributeDetails, RankingBoardResponse } from "./RankingBoardModels";

export type LeaderboardEntity = RankingAttributeDetails<{
  leader_score: number;
  prompts: number;
  replies_assistant: number;
  replies_prompter: number;
  labels_simple: number;
  labels_full: number;
  rankings_total: number;
  rankings_good: number;
  accepted_prompts: number;
  accepted_replies_assistant: number;
  accepted_replies_prompter: number;
  reply_ranked_1: number;
  reply_ranked_2: number;
  reply_ranked_3: number;
  streak_last_day_date: number | null;
  streak_days: number | null;
}>;

export type LeaderboardReply = RankingBoardResponse<"leaderboard", LeaderboardEntity>;
