import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    async create(@Body() createTaskDto: any) {
        return this.taskService.create(createTaskDto);
    }

    @Get()
    async findAll() {
        return this.taskService.findAll();
    }

    @Get('search')
    async search(@Query('query') query: string) {
        return this.taskService.search(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: any) {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.taskService.delete(id);
    }
}