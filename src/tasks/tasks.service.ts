import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTaskDto } from './task.dto';

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


    getTasksById(id: string): Task {
       return this.tasks.find(task => task.id === id)
    }
    
    updateTask(id: string, updatedFields: UpdateTaskDto) {
        const task = this.getTasksById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
        return newTask
    }

    deleteTask(id: string) {
        // filtra el array de tasks exceptuando la task seleccionada 
        this. tasks = this.tasks.filter(task => task.id !== id)
    }
}
