import { Body, Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './task.dto'
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

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
        return this.taskService.updateTask(id, updatedFields)
    }
}
