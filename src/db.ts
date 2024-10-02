import { DataSource } from "typeorm"
import { User } from "./user/user.entity"
import { Event } from "./event/event.entity"
import { Ticket } from "./ticket/ticket.entity"
import { env } from "process"

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Event, Ticket],
    logging: true,
    synchronize: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })