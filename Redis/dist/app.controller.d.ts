import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    setCacheKey(key: string, value: string): Promise<{
        success: boolean;
        status: number;
        message: string;
    }>;
    getCacheKey(key: string): Promise<{
        success: boolean;
        status: number;
        data: string;
    }>;
    deleteCacheKey(key: string): Promise<{
        success: boolean;
        status: number;
        message: string;
    }>;
    resetCache(): Promise<{
        success: boolean;
        status: number;
        message: string;
    }>;
    cacheStore(): Promise<{
        success: boolean;
        status: number;
        data: string[];
    }>;
}
