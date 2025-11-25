import http from "../../../../core/config/httpClient";
import { ListRemoteDataSource } from "./ListRemoteDataSource";
import { AllReviewsResponseSchema, ReviewDTO } from "../dto/ReviewDto";

export class ListRemoteDataSourceImpl implements ListRemoteDataSource {
  private readonly basePath = "/statistic";

  async getAllReviews(): Promise<ReviewDTO[]> {
    const resp = await http.get(`${this.basePath}/all/`);

    const parsed = AllReviewsResponseSchema.safeParse(resp.data);
    if (!parsed.success) {
      throw new Error("Invalid response format: " + parsed.error.message);
    }

    return parsed.data.all_reviews;
  }
}
