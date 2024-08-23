import { Request, Response } from "express";
import { makeToggleTaskCompletionUseCase } from "../../use-cases/factories/make-toggle-task-completion-use-case";
import { z } from "zod";
import { UniqueID } from "../../utils/unique-id";

const toggleTaskCompletionParamsSchema = z.object({
    id: z.string()
})

export async function toggleTaskCompletion(req: Request, res: Response) {

    const { id } = toggleTaskCompletionParamsSchema.parse(req.params)
    const uniqueId = new UniqueID(id)

    const useCase = makeToggleTaskCompletionUseCase()
    const { response } = await useCase.execute({ id: uniqueId })

    if (response instanceof Error) {
        return res.status(404).json(response.message)
    }

    return res.status(200).json(response)
}