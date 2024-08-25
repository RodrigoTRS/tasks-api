import { OTask, Task } from "../models/Task";
import { TasksRepository } from "../repositories/tasks-repository";

interface CreateTaskRequest {
    title: string
    description?: string
    startDate?: Date
    dueDate?: Date
}

interface CreateTaskResponse {
    task: Task
}

export class CreateTaskUseCase {
    constructor(
        private tasksRepository: TasksRepository
    ) {}

    async execute({
        title,
        description,
        startDate,
        dueDate
    }: CreateTaskRequest): Promise<CreateTaskResponse> {

        const task = OTask.create({
            title: title,
            description: description,
            startDate: startDate,
            dueDate: dueDate
        })


        this.tasksRepository.create(task)
        
        return {
            task
        }
    }
}