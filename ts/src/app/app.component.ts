import { Component } from '@angular/core';
import { Features} from './features';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
}

const features = new Features();

features.showMore();




