import { z } from "zod";

export const ReviewDTOSchema = z.object({
  id: z.number(),
  brand: z.string(),
  bottle: z.string(),
  title: z.string(),
  content: z.string(),
});

export type ReviewDTO = z.infer<typeof ReviewDTOSchema>;

export const AllReviewsResponseSchema = z.object({
  success: z.boolean(),
  all_reviews: z.array(ReviewDTOSchema),
});

export type AllReviewsResponse = z.infer<typeof AllReviewsResponseSchema>;
