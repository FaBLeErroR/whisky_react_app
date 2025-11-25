import { ListRepository } from "../repository/ListRepository";
import { ReviewEntity } from "../entity/ReviewEntity";

export class GetAllReviewsUseCase {
  constructor(private repository: ListRepository) {}

  async execute(): Promise<ReviewEntity[]> {
    return this.repository.getAllReviews();
  }
}
