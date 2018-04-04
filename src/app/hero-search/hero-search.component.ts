import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // รอ 300ms หลังจากการกดแป้นพิมพ์แต่ละครั้ง
      debounceTime(300),

      // ignore new term if same as previous term
      // ละเว้นที่เหมือนกับคำก่อนหน้า
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // จะทำการ call api search เมื่อผ่านเงื่อนไขก่อนหน้าทั้งหมด
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
