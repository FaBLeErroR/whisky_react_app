import { z } from "zod";

export const StatisticDTOSchema = z.object({
  id: z.number(),
  name: z.string(),
  review_count: z.number(),
  avg_length: z.number(),
  min_length: z.number(),
  max_length: z.number(),
});

export type StatisticDTO = z.infer<typeof StatisticDTOSchema>;

export const StatisticResponseSchema = z.object({
  success: z.boolean(),
  statistic: z.array(StatisticDTOSchema),
});

export type StatisticResponse = z.infer<typeof StatisticResponseSchema>;
