
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmployeesService } from './../employees.service';
import { Employee } from './../entities/employee.entity';
import { MOCK_DTO, MOCK_RESPONSE, MOCK_ID, MOCK_MSG_DELETED } from "../../common/mock_data/mockeData"


describe('EmployeesService', () => {
    let service: EmployeesService;

    const mockEmployeeRepository = {
        create: jest.fn(MOCK_DTO => MOCK_DTO),
        find: jest.fn(() => (Promise.resolve([MOCK_RESPONSE]))),
        findOneBy: jest.fn(MOCK_ID => (Promise.resolve({ id: MOCK_ID, ...MOCK_RESPONSE }))),
        save: jest.fn().mockImplementation(MOCK_DTO => Promise.resolve({ id: MOCK_ID, ...MOCK_DTO })),
        remove: jest.fn().mockImplementation(MOCK_ID => MOCK_ID)
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmployeesService, {
                provide: getRepositoryToken(Employee),
                useValue: mockEmployeeRepository
            }],
        }).compile();
        service = module.get<EmployeesService>(EmployeesService)
    });

    it("Should be Defined", () => {
        expect(service).toBeDefined()
    })

    it("Should Create a employee and return back", async () => {
        expect(await service.create(MOCK_RESPONSE)).toEqual({
            id: MOCK_ID,
            ...MOCK_DTO
        })
    })

    it("Should Find One Employee", async () => {
        expect(await service.findOne(MOCK_ID)).toEqual(MOCK_RESPONSE)
    })

    it("Should Find All Employees", async () => {
        expect(await service.findAll()).toEqual([MOCK_RESPONSE])
    })

    it("Should Delete an Employees", async () => {
        expect(await service.delete(MOCK_ID)).toEqual(MOCK_MSG_DELETED)
    })

});