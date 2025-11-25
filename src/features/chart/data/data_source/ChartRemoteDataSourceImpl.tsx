import http from "../../../../core/config/httpClient";
import { ChartRemoteDataSource } from "./ChartRemoteDataSource";
import { StatisticResponseSchema, StatisticDTO } from "../dto/StatisticDto";

export class ChartRemoteDataSourceImpl implements ChartRemoteDataSource {
  private readonly basePath = "/statistic";

  async getBrandStatistic(): Promise<StatisticDTO[]> {
    const resp = await http.get(`${this.basePath}/brands/`);

    const parsed = StatisticResponseSchema.safeParse(resp.data);
    if (!parsed.success) {
      throw new Error("Invalid response format: " + parsed.error.message);
    }

    return parsed.data.statistic;
  }

  async getBottleStatistic(): Promise<StatisticDTO[]> {
    const resp = await http.get(`${this.basePath}/bottles/`);

    const parsed = StatisticResponseSchema.safeParse(resp.data);
    if (!parsed.success) {
      throw new Error("Invalid response format: " + parsed.error.message);
    }

    return parsed.data.statistic;
  }
}
