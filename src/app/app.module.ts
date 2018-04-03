// impojrt library ต่างๆ ของ angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here

// import component ที่จะใช้งาน
import { AppComponent } from './app.component';
// สร้าง component ผ่านคำสั่ง ng generate componen;
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// สร้าง component ผ่านคำสั่ง ng generate component hero-detail
import { HeroesComponent } from './heroes/heroes.component';
// สร้าง service จากคำสั่ง ng generate service hero --module=app
import { HeroService } from './hero.service';
// สร้าง service จากคำสั่ง ng generate service message --module=app
import { MessageService } from './message.service';
// สร้าง component ผ่านคำสั่ง ng generate component messages
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  // ประกาศใช้งาน component ที่ต้องการ
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  // import library
  imports: [
    BrowserModule,
    FormsModule
  ],
  // เรียกใช้ service HeroService, MessageService เป็นตัวกลางในการปรับเปลี่ยนข้อมูลของ
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
