import { PostgresTasksRepository } from "../../repositories/postgres/postgres-tasks-repository";
import { CreateTaskUseCase } from "../create-task-use-case";

export function makeCreateTaskUseCase() {
    const tasksRepository = new PostgresTasksRepository()
    const useCase = new CreateTaskUseCase(tasksRepository)
    return useCase
}