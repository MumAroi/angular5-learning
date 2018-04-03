import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'; // import prototype obj hero
// import { HEROES } from '../mock-heroes'; // import mock up data heroes

// import HeroService เพิื่อใช้ในการปรับเปลี่ยนข้อมูลแบบมีตัวกลาง
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'windstrom';
  // สร้าง obj Hero ตามชนิดตัวแปรที่ระบุมาจากการ import Hero
  // hero: Hero = {
  //   id: 1,
  //   name: 'windstrom'
  // };
  // heroes = HEROES; // กำหนดค่า ให้ตัวแปร heroes ให้มีค่าท่ากับ array HEROES
  // กำหนดค่า default
  heroes: Hero[];

  // ประกาศตัวแปร ให้มีโครงสร้างเท่ากับ obj Hero
  selectedHero: Hero;

// เรียกใช้ HeroService โดยแทนคำสั่งผ่านตัวแปร heroService
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // เรียกใช่ func เมื่อ component เริ่มทำงาน
    this.getHeroes();
  }

  // func ที่จะถูกเรียกใช้เมื่อ <li> มี action click โดยจะรับตัวแปร hero ที่มีการกำหมดโครงสร้างให้เท่ากับ obj Hero
  onSelect(hero: Hero): void {
    // กำหนดตัวแปร selectHero ให้เท่ากับ hero ที่ส่งมา
    this.selectedHero = hero;
  }

  // func getHeroes จะเซ็ตค่า heroes ให้เท่ากับข้อมูลที่อยู่ใน heroService.getHeroes
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    // subscribe ข้อมูลข้อง Hero โดยมีการส่ง func callback เข้าไปด้วย func heroes()
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
