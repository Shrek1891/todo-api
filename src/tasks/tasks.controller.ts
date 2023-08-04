import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto";
import {TasksService} from "./tasks.service";

@Controller('notes')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get('/stats')
    getStats() {
        return this.tasksService.getStats();
    }

    @Get('/')
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getByOne(@Param('id') taskId: number) {
        const res = this.tasksService.getNote(taskId);
        if (res) {
            return res;
        } else {
            return {"message": "Task not found"};
        }
    }

    @Post('/')
    createTask(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createNote(taskDto);
    }

    @Delete('/:id')
    delete(@Param('id') taskId: number) {
        return this.tasksService.deleteNote(taskId);
    }

    @Patch('/:id')
    update(@Param('id') taskId: number, @Body() taskDto: CreateTaskDto) {
        return this.tasksService.updateNote(taskId, taskDto);
    }
}
