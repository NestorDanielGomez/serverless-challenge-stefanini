import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from '../employees.controller';
import { EmployeesService } from '../employees.service';
import { MOCK_DTO, MOCK_RESPONSE, MOCK_ID, MOCK_MSG_DELETED } from "../../common/mock_data/mockeData"

describe('AppController', () => {
    let controller: EmployeesController;

    const mockEmployeeService = {
        create: jest.fn(MOCK_DTO => {
            return {
                id: MOCK_ID,
                ...MOCK_DTO
            }
        }),

        update: jest.fn().mockImplementation((MOCK_ID, MOCK_DTO) => ({
            id: MOCK_ID,
            ...MOCK_DTO,
        })),
        delete: jest.fn().mockImplementation(() => (MOCK_MSG_DELETED)),
        findAll: jest.fn().mockImplementation(() => [MOCK_RESPONSE]),
        findOne: jest.fn().mockImplementation((MOCK_ID) => ({ id: MOCK_ID, ...MOCK_DTO }))
    }


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmployeesController],
            providers: [
                EmployeesService,
            ],
        }).overrideProvider(EmployeesService)
            .useValue(mockEmployeeService)
            .compile();

        controller = module.get<EmployeesController>(EmployeesController);
    });


    it('Should be Defined', () => {
        expect(controller).toBeDefined();
    });

    it('Should Find All Employees', () => {
        expect(controller.findAll()).toEqual([MOCK_RESPONSE]);
    });
    it('Should Find One Employee', () => {
        expect(controller.findOne(MOCK_ID)).toEqual(MOCK_RESPONSE);
    });


    it('Should Create an Employee', () => {
        expect(controller.create(MOCK_DTO)).toEqual(MOCK_RESPONSE);

    });

    it("Should Update a Employee", () => {
        expect(controller.update(MOCK_ID, MOCK_DTO)).toEqual({
            id: MOCK_ID, ...MOCK_DTO
        })
        expect(mockEmployeeService.update).toHaveBeenCalled()
    })

    it('Should Delete an Employee', () => {
        expect(controller.remove(MOCK_ID)).toEqual(MOCK_MSG_DELETED);
    });

})
