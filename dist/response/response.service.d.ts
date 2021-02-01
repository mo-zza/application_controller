import { ErrorInputDto, ResponseInputDto } from './dto/response.dto';
export declare class ResponseService {
    getErrorResponse(errorInputDto: ErrorInputDto): {
        response: number;
        description: string;
    };
    getResponse(responseData: ResponseInputDto): {
        data: any;
    };
}
