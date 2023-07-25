import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private readonly storage: StorageService) {
  }

  public save(storageKey: string, value: unknown): void {
    this.storage.set(storageKey, JSON.stringify(value));
  }

  public read(storageKey: string): any {
    const value = this.storage.get(storageKey);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }
}


