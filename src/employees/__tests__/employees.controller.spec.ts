import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from '../employees.controller';
import { EmployeesService } from '../employees.service';
import { Employee } from '../entities/employee.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { EmployeesModule } from '../employees.module';

describe('AppController', () => {
    let controller: EmployeesController;
    //let employeesRepository: Repository<Employee>

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [EmployeesModule],
            providers: [
                EmployeesService,
                {
                    provide: getRepositoryToken(Employee),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                        findOne: jest.fn(),
                        find: jest.fn()
                    }
                },
                {
                    provide: EntityManager,
                    useValue: {},
                },
            ],
        }).compile();

        controller = app.get<EmployeesController>(EmployeesController);
        // employeesRepository = module.get<Repository<Employee>>(getRepositoryToken(Employee))
    });

    describe('root', () => {
        it('should return "an array of employee"', () => {
            expect(controller.findAll).toHaveBeenCalled();
        });
    });
});