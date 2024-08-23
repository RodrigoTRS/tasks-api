import { OTask, Task } from "../models/Task";
import { TasksRepository } from "../repositories/tasks-repository";
import { UniqueID } from "../utils/unique-id";

interface ToggleTaskCompletionRequest {
    id: UniqueID
}

interface ToggleTaskCompletionResponse {
    response: Task | Error
}

export class ToggleTaskCompletionUseCase {
    constructor(
        private tasksRepository: TasksRepository
    ) {}

    async execute({
        id
    }: ToggleTaskCompletionRequest): Promise<ToggleTaskCompletionResponse> {


        const existingTask = await this.tasksRepository.fetchById(id)

        if (!existingTask) {
            return {
                response: new Error("Task not found.")
            }
        }

        const updatingTask = OTask.map(existingTask)
        updatingTask.toggleCompletion()
        const task = updatingTask.toValue()
        
        await this.tasksRepository.update(task)


        return {
            response: task
        }
    }
}