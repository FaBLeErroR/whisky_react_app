import { ChartRepository } from "../repository/ChartRepository";
import { StatisticEntity } from "../entity/StatisticEntity";

export class GetBrandStatisticUseCase {
  constructor(private repository: ChartRepository) {}

  async execute(): Promise<StatisticEntity[]> {
    return this.repository.getBrandStatistic();
  }
}
