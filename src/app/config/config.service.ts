import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  private http: HttpClient;
  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
  }
  getFile(path: string) {
    return this.http.get(path);
  }
}
