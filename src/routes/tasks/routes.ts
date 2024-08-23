import { Router } from "express"

import { createTask } from "./create-task"
import { fetchTasks } from "./fetch-tasks"
import { toggleTaskCompletion } from "./toggle-task-completion"

export const taskRouter = Router()

taskRouter.post("/", createTask)
taskRouter.get("/", fetchTasks)
taskRouter.patch("/:id", toggleTaskCompletion)
