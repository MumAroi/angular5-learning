// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
// import Routes, RouterModule เพื่อมาทำ route page
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

// ประกาศ routes ที่มี
const routes: Routes = [
  //  /heroes จะไปเรียก component HeroesComponest
  { path: 'heroes', component: HeroesComponent }
];
// imports เลือก route ที่ต้องการนำมาใช้ ผ่าน root
// exports route ที่จะใช้ ไปให้ module ที่เรียก
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
