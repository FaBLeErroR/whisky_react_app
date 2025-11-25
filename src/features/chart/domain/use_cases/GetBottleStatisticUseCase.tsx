import { ChartRepository } from "../repository/ChartRepository";
import { StatisticEntity } from "../entity/StatisticEntity";

export class GetBottleStatisticUseCase {
  constructor(private repository: ChartRepository) {}

  async execute(): Promise<StatisticEntity[]> {
    return this.repository.getBottleStatistic();
  }
}
