import express, { Request, Response, json } from "express"
import { taskRouter } from "./routes/tasks/routes"

export const app = express()

app.use(json())
app.use("/tasks", taskRouter)


app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello world"})
})