// impojrt library ต่างๆ ของ angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here
import { HttpClientModule } from '@angular/common/http';

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
// สร้าง component ผ่านคำสั่ง ng generate component dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// สร้าง component ผ่านคำสั่ง ng generate component hero-search
import { HeroSearchComponent } from './hero-search/hero-search.component';
// สร้าง Route ผ่านคำสั่ง ng ng generate module app-routing --flat --module=app
import { AppRoutingModule } from './app-routing.module';

// web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  // ประกาศใช้งาน component ที่ต้องการ
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  // import library
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // เรียกใช้ service HeroService, MessageService เป็นตัวกลางในการปรับเปลี่ยนข้อมูลของ
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
