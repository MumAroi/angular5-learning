import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // เรียกใช้ component ผ่าน selector ชื่อ app-root
  templateUrl: './app.component.html', // template ที่นำมาใช้งานกับ component ต้องเป็น html code
  styleUrls: ['./app.component.css'] // style ที่นำมาใช้กับ componet ต้องเป็น css code
  // selector: 'app-root',
  // template: `<h1>Hello {{name}}!</h1>`,
  // styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
