import { parse } from "path";
import { z } from "zod";

const envSchema = z.object({
    PORT: z.string().default("3333").transform(e => parseInt(e)),
    PG_USER: z.string().default("docker"),
    PG_PASSWORD: z.string().default("docker"),
    PG_DATABASE: z.string().default("taskapi"),
    PG_HOST: z.string().default("localhost"),
    PG_PORT:z.string().default("5432").transform(e => parseInt(e))
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    throw new Error("failed on parsing env variables")
}

export const env = _env.data