import { Request, Response } from "express";
import { makeFetchTasksUseCase } from "../../use-cases/factories/make-fetch-tasks-use-case";

export async function fetchTasks(req: Request, res: Response) {
    const useCase = makeFetchTasksUseCase()
    const { tasks } = await useCase.execute()

    return res.status(200).json(tasks)
}