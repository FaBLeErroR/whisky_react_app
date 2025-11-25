import { ReviewDTO } from "../dto/ReviewDto";

export interface ListRemoteDataSource {
  getAllReviews(): Promise<ReviewDTO[]>;
}
