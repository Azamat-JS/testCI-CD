import { Cache } from '@nestjs/cache-manager';
export declare class AppService {
    private readonly cacheManager;
    constructor(cacheManager: Cache);
    setCacheKey(key: string, value: string): Promise<void>;
    getCacheKey(key: string): Promise<string>;
}
