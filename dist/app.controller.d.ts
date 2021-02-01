import { AppService } from './app.service';
import { TestClass } from './dto/app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(queryParmas: TestClass): string;
}
