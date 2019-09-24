import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {App} from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  app: App;
  title = 'app';

  constructor(private http: HttpClient) {

    App.init(http);
  }

}
