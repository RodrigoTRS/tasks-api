import { Request, Response } from "express";
import { makeCreateTaskUseCase } from "../../use-cases/factories/make-create-task-use-case";
import { z } from "zod";

const createTaskBodySchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    dueDate: z.date().optional(),
    startDate: z.date().optional(),
})

export async function createTask(req: Request, res: Response) {

    const {
        title,
        description,
        dueDate,
        startDate
    } = createTaskBodySchema.parse(req.body)



    const useCase = makeCreateTaskUseCase()
    const { task } = await useCase.execute({
        title,
        description,
        dueDate,
        startDate
    })

    return res.status(200).json(task)
}