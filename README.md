## Японский виски

Код писался согласно чистой архитектуре все страницы были вынесены в отдельные фичи, внутри которых было добавлено разделение на слои данных, бмзнесс-логики и ui. Все компоненты, используемые в нескольких фичах лежат в папке core.

# Для запросов к api используется библиотека axios

```
import axios from "axios";
import { BASE_API_URL } from "./endpoints";

const http = axios.create({
  baseURL: BASE_API_URL,
  auth: {
    username: "student",
    password: "dvfu",
  },
  withCredentials: true,
});

export default http;
```

Для запросов сконфигурирован базовый uri, а также данные пользователя сразу передаются с запросом.


# Data слой

В data слое реализованы data_source, dto и repository

В data_source содержатся запросы приложения к api

```
async getBrandStatistic(): Promise<StatisticDTO[]> {
    const resp = await http.get(`${this.basePath}/brands/`);

    const parsed = StatisticResponseSchema.safeParse(resp.data);
    if (!parsed.success) {
      throw new Error("Invalid response format: " + parsed.error.message);
    }

    return parsed.data.statistic;
  }
```

Ответ парсится в DTO

```
import { z } from "zod";

export const StatisticDTOSchema = z.object({
  id: z.number(),
  name: z.string(),
  review_count: z.number(),
  avg_length: z.number(),
  min_length: z.number(),
  max_length: z.number(),
});

export type StatisticDTO = z.infer<typeof StatisticDTOSchema>;

export const StatisticResponseSchema = z.object({
  success: z.boolean(),
  statistic: z.array(StatisticDTOSchema),
});

export type StatisticResponse = z.infer<typeof StatisticResponseSchema>;
```

В dto реализован метод парсинга файла из json при помощи библиотеки zod.


Далее в файле repositor_impl dto преобразуется в entity

```
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
```

# Domain слой

В domain слое приложения находятся entity, а также use_cases

```
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
```

Entity содержит объект, преобразованный из dto и пригодный для дальнейшей работы

```
import { ChartRepository } from "../repository/ChartRepository";
import { StatisticEntity } from "../entity/StatisticEntity";

export class GetBottleStatisticUseCase {
  constructor(private repository: ChartRepository) {}

  async execute(): Promise<StatisticEntity[]> {
    return this.repository.getBottleStatistic();
  }
}

```

use_cases нужны для обработки информации полученной с бэка и передачи ее в ui слой.

# UI слой

В ui слое происзодит отображение данных. Для отображения entity нужно было преобразовать

```
const mapped = result.map((r) => ({
            Группа: r.name,
            "Количество отзывов": r.review_count,
            "Максимальная длина": r.max_length,
            "Средняя длина": r.avg_length,
            "Минимальная длина": r.min_length,
        }));
```

