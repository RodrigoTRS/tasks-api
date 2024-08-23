import { PostgresTasksRepository } from "../../repositories/postgres/postgres-tasks-repository";
import { FetchTasksUseCase } from "../fetch-tasks-use-case";

export function makeFetchTasksUseCase() {
    const tasksRepository = new PostgresTasksRepository()
    const useCase = new FetchTasksUseCase(tasksRepository)
    return useCase
}