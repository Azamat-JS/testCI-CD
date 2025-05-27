import { AppService } from './app.service';
import { LoginDto } from './loginDto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAuthSession(sesssion: Record<string, any>): Promise<void>;
    loginUser(loginDto: LoginDto, req: any): Promise<void>;
}
