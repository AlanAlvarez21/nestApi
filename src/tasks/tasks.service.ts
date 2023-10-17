import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
        id: '1',
        title: 'fisrt task',
        description: 'first task description :D',
        status: TaskStatus.PENDING,
    },
    ];

    getAllTasks() {
        return this.tasks;
    }

    createTask(title: string, description: string) {
        const task: Task = {
            id: uuidv4(),
            title: title, // Use the 'title' parameter
            description: description, // Use the 'description' parameter
            status: TaskStatus.PENDING,
        };
    
        this.tasks.push(task);
    
        return task;
    }
    
    updateTask() {

    }

    deleteTask(id: string) {
        // filtra el array de tasks exceptuando la task seleccionada 
        this. tasks = this.tasks.filter(task => task.id !== id)
    }
}
