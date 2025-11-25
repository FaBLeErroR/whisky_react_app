export class StatisticEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly review_count: number,
    public readonly avg_length: number,
    public readonly min_length: number,
    public readonly max_length: number
  ) {}
}