import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // library ที่ใช้ในการโต้ตอบ url กับ browser

import { Hero } from '../hero';


import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // sync ค่าที่รับมาจาก hero component <app-hero-detail [hero]="selectedHero"> ที่ถูกเรียกใช้ใน hero.component.html
  @Input() hero: Hero;

  constructor(
    // ประกาศตัวแปรที่ใช้แทน library ต่างๆ โดยตรง
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  // get Hero by id
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  // func ให้ย้อนกลับไป url ก่อนหน้า
  goBack(): void {
    this.location.back();
  }

}
