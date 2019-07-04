import { Injectable, NotFoundException } from '@nestjs/common';
import uuid from 'uuid/v5';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: Date.now() + '',
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task: Task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  deleteTaskById(id: string) {
    this.tasks = this.tasks.filter((task: Task) => {
      return task.id !== id;
    });
  }
  updateTaskStatus(id: string, status: TaskStatus) {
    const task: Task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
