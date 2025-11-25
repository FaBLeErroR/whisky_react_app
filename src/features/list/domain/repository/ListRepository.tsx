import { ReviewEntity } from "../entity/ReviewEntity";

export interface ListRepository {
  getAllReviews(): Promise<ReviewEntity[]>;
}
