import { BadRequestException, Get, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  logger: any;

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const newEmployee = this.employeeRepository.create(createEmployeeDto)
      await this.employeeRepository.save(newEmployee)
      return newEmployee;
    } catch (error) {
      this.handleDbExceptions(error)
    }
  }

  async findAll() {
    const list = await this.employeeRepository.find({})
    return list;
  }

  async findOne(id: string) {
    const employee = await this.employeeRepository.findOneBy({ id })
    if (!employee) throw new NotFoundException(`Employee with id:${id} not found`)
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {

    const employee = await this.employeeRepository.preload({ id, ...updateEmployeeDto })
    if (!employee) throw new NotFoundException(`Employee with id:${id} not found`)
    return this.employeeRepository.save(employee);
  }

  async delete(id: string): Promise<string> {
    const employeeToDelete = await this.findOne(id)
    await this.employeeRepository.remove(employeeToDelete)
    return `Employee with Id:${id} and Name:${employeeToDelete.nombre} deleted`;
  }

  private handleDbExceptions(error: any) {
    if (error.code === "23505") {
      throw new BadRequestException(error.detail)
    }
    if (error.code === "error-01") {
      throw new BadRequestException(error.detail)
    }
    this.logger.error(error)
    throw new InternalServerErrorException(`Unexpected error, check server logs`)
  }

}

