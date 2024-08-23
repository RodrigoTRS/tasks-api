import { Task } from "../models/Task";
import { UniqueID } from "../utils/unique-id";

export interface TasksRepository {
    fetchAll: () => Promise<Task[]>
    fetchById: (id: UniqueID) => Promise<Task | void>
    create: (task: Task) => Promise<void>
    update: (task: Task) => Promise<void>
}