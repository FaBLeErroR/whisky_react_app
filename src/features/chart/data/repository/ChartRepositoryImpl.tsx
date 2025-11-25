import { ChartRepository } from "../../domain/repository/ChartRepository";
import { StatisticEntity } from "../../domain/entity/StatisticEntity";
import { ChartRemoteDataSource } from "../data_source/ChartRemoteDataSource";

export class ChartRepositoryImpl implements ChartRepository {
  constructor(private readonly remote: ChartRemoteDataSource) {}

  async getBrandStatistic(): Promise<StatisticEntity[]> {
    const dto = await this.remote.getBrandStatistic();

    return dto.map(d => new StatisticEntity(
      d.id,
      d.name,
      d.review_count,
      d.avg_length,
      d.min_length,
      d.max_length
    ));
  }

  async getBottleStatistic(): Promise<StatisticEntity[]> {
    const dto = await this.remote.getBottleStatistic();

    return dto.map(d => new StatisticEntity(
      d.id,
      d.name,
      d.review_count,
      d.avg_length,
      d.min_length,
      d.max_length
    ));
  }
}
