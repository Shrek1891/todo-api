import {Injectable} from '@nestjs/common';
import {TasksModel} from "./tasks.model";
import {CreateTaskDto} from "./dto/create-task.dto";
import {InjectModel} from "@nestjs/sequelize";
import {getCreatedDate} from "../helpers/getDate";
import nameIcons from "../helpers/getIcon";


@Injectable()
export class TasksService {
    constructor(@InjectModel(TasksModel) private tasksRepository: typeof TasksModel) {
    }

    async getAllTasks() {
        return await this.tasksRepository.findAll({order: [['name', 'DESC']]});
    }

    async deleteNote(taskId: number) {
        return await this.tasksRepository.destroy({
            where: {
                id: taskId,
            },
        });
    }

    async createNote(dto: CreateTaskDto) {
        return await this.tasksRepository.create({
            ...dto,
            id: Math.floor(Math.random() * (10000 - 1)) + 1,
            icon: nameIcons(dto.category),
            created: getCreatedDate(),

        });
    }

    async getNote(taskId: number) {
        return await this.tasksRepository.findOne({
            where: {
                id: taskId,
            },
        });
    }

    async updateNote(taskId: number, dto: CreateTaskDto) {
        const res = await this.tasksRepository.findOne({
            where: {
                id: taskId,
            },
        })
        return await this.tasksRepository.update({
            ...dto,
            Dates: dto.Dates && res.Dates && dto.Dates !== res.Dates ? `${res.Dates},${dto.Dates}` : dto.Dates,
        }, {

            where: {
                id: taskId,
            }
        })
    }

    async getStats() {
        const resTasks = await this.tasksRepository.findAll();
        const stats = {}
        resTasks.forEach(item => {
            if (!stats[item.category]) {
                stats[item.category] = {
                    active: 0,
                    archived: 0,
                };
            }
            if (item.archived) {
                stats[item.category].archived += 1;
            } else {
                stats[item.category].active += 1;
            }
        })
        return stats;
    }
}
