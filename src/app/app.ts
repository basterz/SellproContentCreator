import {HttpClient} from '@angular/common/http';

export class App {
  static instance: App;
  public http: HttpClient;
  private constructor(http: HttpClient) {
    this.http = http;
  }

  static init(http: HttpClient): void {
    App.instance = new App( http );
  }
}
