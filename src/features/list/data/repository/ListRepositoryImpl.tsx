import { ListRepository } from "../../domain/repository/ListRepository";
import { ReviewEntity } from "../../domain/entity/ReviewEntity";
import { ListRemoteDataSource } from "../data_source/ListRemoteDataSource";

export class ListRepositoryImpl implements ListRepository {
  constructor(private readonly remote: ListRemoteDataSource) {}

  async getAllReviews(): Promise<ReviewEntity[]> {
    const dto = await this.remote.getAllReviews();

    return dto.map(d => new ReviewEntity(
      d.id,
      d.brand,
      d.bottle,
      d.title,
      d.content
    ));
  }
}
