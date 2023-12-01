import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee } from './entities/employee.entity';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [TypeOrmModule, EmployeesService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Employee])
  ],
  //exports: [TypeOrmModule, EmployeesModule, EmployeesService]
})
export class EmployeesModule { }
