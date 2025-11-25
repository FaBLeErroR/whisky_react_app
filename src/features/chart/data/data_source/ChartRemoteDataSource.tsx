import { StatisticDTO } from "../dto/StatisticDto";

export interface ChartRemoteDataSource {
  getBrandStatistic(): Promise<StatisticDTO[]>;
  getBottleStatistic(): Promise<StatisticDTO[]>;
}
