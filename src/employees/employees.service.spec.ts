
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Employee as EmployeeEntity } from './entities/employee.entity';
import { EmployeesService } from './employees.service';


describe('EmployeesService', () => {

    let service: EmployeesService;
    let employeesRepository: Repository<EmployeeEntity>

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmployeesService,
                {
                    provide: getRepositoryToken(EmployeeEntity),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                        findOne: jest.fn()
                    }
                },
                {
                    provide: EntityManager,
                    useValue: {},
                }, ,]
        }).compile();

        service = module.get<EmployeesService>(EmployeesService)
        employeesRepository = module.get<Repository<EmployeeEntity>>(getRepositoryToken(EmployeeEntity))
    });

    it("should be defined", () => {
        expect(service).toBeDefined()
    })

    // test("findAll", async () => {
    //     await service.findAll()
    //     expect(employeesRepository.find).toHaveBeenCalled()
    // })


});