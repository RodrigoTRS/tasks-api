import { Task } from "../../models/Task";
import { TasksRepository } from "../tasks-repository";
import { createPGClient } from "../../lib/pg-client";
import { UniqueID } from "../../utils/unique-id";

export class PostgresTasksRepository implements TasksRepository {

    async fetchAll(): Promise<Task[]> {
        const client = createPGClient()

        const tasks: Task[] = []

        try {
            await client.connect()

            const query = `
                SELECT * FROM tasks
            `;  

            const response = await client.query(query)

            response.rows.map((row) => {
                const newTask: Task = {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    startDate: row.start_date,
                    dueDate: row.due_date,
                    createdAt: row.created_at,
                    updatedAt: row.updated_at,
                    isDone: row.is_done
                }
                tasks.push(newTask)
            })
            
        } catch(err) {
            console.log("Error:")
            console.error(err)
        } finally {
            await client.end()
        }

        return tasks
    }

    async fetchById(id: UniqueID): Promise<Task | void> {
        const client = createPGClient()

        const tasks: Task[] = []

        try {
            await client.connect()

            const query = `
                SELECT * FROM tasks
                WHERE id = $1
            `;  

            const values = [id.value]

            const response = await client.query(query, values)

            response.rows.map((row) => {
                const newTask: Task = {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    startDate: row.start_date,
                    dueDate: row.due_date,
                    createdAt: row.created_at,
                    updatedAt: row.updated_at,
                    isDone: row.is_done
                }
                tasks.push(newTask)
            })

            
        } catch(err) {
            console.log("Error:")
            console.error(err)
        } finally {
            await client.end()
        }

        if (tasks.length > 0) {
            return tasks[0]
        } else {
            return
        }
    }

    async create(task: Task): Promise<void> {
        const client = createPGClient()

        try {
            await client.connect()

            const query = `
            INSERT INTO tasks (id, title, description, start_date, due_date, created_at, updated_at, is_done)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
            `;  
            const values = [
                task.id,
                task.title,
                task.description,
                task.startDate,
                task.dueDate,
                task.createdAt,
                task.updatedAt,
                task.isDone
            ];

            await client.query(query, values)
        } catch(err) {
            console.error(err)
        } finally {
            await client.end()
        }
    }

    async update(task: Task): Promise<void> {
        const client = createPGClient()

        const tasks: Task[] = []

        try {
            await client.connect()

            const query = `
            UPDATE tasks
            SET
                title = $1,
                description = $2,
                start_date = $3,
                due_date = $4,
                created_at = $5,
                updated_at = $6,
                is_done = $7
            WHERE id = $8
            `;  
            const values = [
                task.title,
                task.description,
                task.startDate,
                task.dueDate,
                task.createdAt,
                task.updatedAt,
                task.isDone,
                task.id
            ];

            await client.query(query, values)
        } catch(err) {
            console.error(err)
        } finally {
            await client.end()
        }
    }
}