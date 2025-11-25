import { ListRemoteDataSourceImpl } from "./../../features/list/data/data_source/ListRemoteDataSourceImpl";
import { ListRepositoryImpl } from "./../../features/list/data/repository/ListRepositoryImpl";
import { GetAllReviewsUseCase } from "./../../features/list/domain/use_cases/GetAllReviewsUseCase";

import { ChartRemoteDataSourceImpl } from "./../../features/chart/data/data_source/ChartRemoteDataSourceImpl";
import { ChartRepositoryImpl } from "./../../features/chart/data/repository/ChartRepositoryImpl";
import { GetBrandStatisticUseCase } from "./../../features/chart/domain/use_cases/GetBrandStatisticUseCase";
import { GetBottleStatisticUseCase } from "./../../features/chart/domain/use_cases/GetBottleStatisticUseCase";

/// List di
const listRemoteDataSourceImpl = new ListRemoteDataSourceImpl();
const listRepositoryImpl = new ListRepositoryImpl(listRemoteDataSourceImpl);

export const getAllReviewsUseCase = new GetAllReviewsUseCase(listRepositoryImpl);

/// Chart di
const chartRemoteDataSourceImpl = new ChartRemoteDataSourceImpl();
const chartRepositoryImpl = new ChartRepositoryImpl(chartRemoteDataSourceImpl);

export const getBrandStatisticUseCase = new GetBrandStatisticUseCase(chartRepositoryImpl);
export const getBottleStatisticUseCase = new GetBottleStatisticUseCase(chartRepositoryImpl);