import {Module} from "@nestjs/common";

import {SequelizeModule} from "@nestjs/sequelize";
import { TasksModule } from './tasks/tasks.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {TasksModel} from "./tasks/tasks.model";



@Module({
    controllers:[],
    providers:[],
    imports:[
        ConfigModule.forRoot({
            envFilePath:`.${process.env.NODE_ENV}.env`,

        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRESS_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models:[TasksModel],
            autoLoadModels: true
        }),
        TasksModule,
    ]

})
export class AppModule{}