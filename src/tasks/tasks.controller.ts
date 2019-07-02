import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTasks(createTaskDto);
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    const task: Task = this.taskService.getTaskById(id);
    return task;
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTaskById(id);
  }
}
