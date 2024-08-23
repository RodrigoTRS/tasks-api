import pg from "pg"
import { env } from "../utils/env"

export function createPGClient() {
    const client = new pg.Client({
        user: env.PG_USER,
        password: env.PG_PASSWORD,
        host: env.PG_HOST,
        port: env.PG_PORT,
        database: env.PG_DATABASE
    })

    return client
}