import { Task } from "../models/Task";
import { TasksRepository } from "../repositories/tasks-repository";

interface FetchTasksResponse {
    tasks: Task[]
}

export class FetchTasksUseCase {
    constructor(
        private tasksRepository: TasksRepository
    ) {}

    async execute(): Promise<FetchTasksResponse> {


        const tasks = await this.tasksRepository.fetchAll()
        
        return {
            tasks
        }
    }
}