import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async setCacheKey(key: string, value: string): Promise<void> {
    await this.cacheManager.set(key, value);
  }

  async getCacheKey(key: string): Promise<string> {
    return await this.cacheManager.get(key) as string;
  }
}
