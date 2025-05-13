import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async setCacheKey(key: string, value: string): Promise<void> {
    await this.cacheManager.set(key, value);
  };

  async getCacheKey(key: string): Promise<string> {
    return await this.cacheManager.get(key) as string;
  };

  async deleteCacheKey(key:string):Promise<void>{
    await this.cacheManager.del(key)
  };

  async resetCache():Promise<void>{
    await this.cacheManager.clear();
  };

  async cacheKeys(): Promise<string[]> {
    const stores = (this.cacheManager as any).stores;
    if (stores && stores.length > 0 && typeof stores[0].keys === 'function') {
      return await stores[0].keys();
    }
    return [];
  } 

}
