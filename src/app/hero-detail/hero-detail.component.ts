import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // sync ค่าที่รับมาจาก hero component <app-hero-detail [hero]="selectedHero"> ที่ถูกเรียกใช้ใน hero.component.html
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
