export class ReviewEntity {
  constructor(
    public readonly id: number,
    public readonly brand: string,
    public readonly bottle: string,
    public readonly title: string,
    public readonly content: string
  ) {}
}
