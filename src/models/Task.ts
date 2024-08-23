import { UniqueID } from "../utils/unique-id"

export interface Task {
    id?: string
    title: string
    description?: string
    startDate?: Date 
    dueDate?: Date 
    createdAt: Date
    updatedAt: Date
    isDone?: Date
}

export interface CreateTaskProps {
    title: string
    description?: string
    startDate?: Date
    dueDate?: Date
}

export interface MapTaskProps {
    id: string
    title: string
    description: string | null | undefined
    startDate: Date | null | undefined
    dueDate: Date | null | undefined
    createdAt: Date
    updatedAt: Date
    isDone: Date | null | undefined
}

export class OTask {
    private _id: UniqueID
    private _title: string
    private _description: string | undefined
    private _startDate: Date | undefined
    private _dueDate: Date | undefined
    private _createdAt: Date
    private _updatedAt: Date
    private _isDone: Date | undefined
    
    private constructor({
        id,
        title,
        description,
        startDate,
        dueDate,
        createdAt,
        updatedAt,
        isDone,
    }: Task) {
        this._id = new UniqueID(id)
        this._title = title,
        this._description = description
        this._startDate = startDate
        this._dueDate = dueDate,
        this._createdAt = createdAt,
        this._updatedAt = updatedAt,
        this._isDone = isDone
    }

    static create({
        title,
        description,
        dueDate,
        startDate
    }: CreateTaskProps) {
        const task = new OTask({
            id: undefined,
            title,
            description,
            dueDate,
            startDate,
            createdAt: new Date(),
            updatedAt: new Date(),
            isDone: undefined,
        })
        return task.toValue()
    }

    static map(task: Task) {
        const newTask = new OTask({
            id: task.id,
            title: task.title,
            description: task.description === null ? undefined : task.description,
            dueDate: task.dueDate === null ? undefined : task.dueDate,
            startDate: task.startDate === null ? undefined : task.startDate,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
            isDone: task.isDone === null ? undefined : task.isDone,
        })
        return newTask
    }
    

    public toValue() {
        return {
            id: this._id.value,
            title: this._title,
            description: this._description,
            startDate: this._startDate,
            dueDate: this._dueDate, 
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
            isDone: this._isDone
        }
    }

    public touch() {
        this._updatedAt = new Date()
    }

    public toggleCompletion() {
        this.touch()
        this._isDone = this._isDone ? undefined : new Date()
    }
}