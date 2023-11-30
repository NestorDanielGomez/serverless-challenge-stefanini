import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Employee])
  ],
  exports: [TypeOrmModule]
})
export class EmployeesModule { }
