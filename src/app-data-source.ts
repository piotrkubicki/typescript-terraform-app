import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        "/app/dist/entities/*js"
    ],
    logging: true,
    synchronize: true
});
