import { PostgresTasksRepository } from "../../repositories/postgres/postgres-tasks-repository";
import { ToggleTaskCompletionUseCase } from "../toggle-task-completion-use-case";

export function makeToggleTaskCompletionUseCase() {
    const tasksRepository = new PostgresTasksRepository()
    const useCase = new ToggleTaskCompletionUseCase(tasksRepository)
    return useCase
}