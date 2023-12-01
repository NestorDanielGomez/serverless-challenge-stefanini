import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Employee")
@Controller('employee')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService) { }

  @ApiResponse({ status: 201, description: "Employee created successfully", type: Employee })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    return this.employeesService.delete(id);
  }
}
