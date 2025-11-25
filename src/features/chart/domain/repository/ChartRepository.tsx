import { StatisticEntity } from "../entity/StatisticEntity";

export interface ChartRepository {
  getBrandStatistic(): Promise<StatisticEntity[]>;
  getBottleStatistic(): Promise<StatisticEntity[]>;
}
