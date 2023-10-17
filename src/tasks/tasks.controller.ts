import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './task.dto'
@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks()
    };

    @Post()
    createTask(@Body()  newTask: CreateTaskDto) {
        console.log(newTask)
        this.taskService.createTask(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.taskService.deleteTask(id)
    }

    @Put()
    updateTask() {

    }
}
