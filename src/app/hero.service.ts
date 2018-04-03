import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import โครงสร้าง obj ของ hero
import { Hero } from './hero';
// import mocker up date ของ hero
import { HEROES } from './mock-heroes';

// rxjs อ่านเพิ่มเติมได้ในเรื่อง Reactive Programming
// import Onservable ที่ใช้ในการติดตามข้อมูล
import { Observable } from 'rxjs/Observable';
// ใช้ of แทน คำสั่ง create ของ rxjs
import { of } from 'rxjs/observable/of';

// import service message
import { MessageService } from './message.service';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    // แทนค่า MessageService ผ่านตัวแปร messageService
    private messageService: MessageService
  ) { }
  // func ที่ใช้ในการ return ค่า mocker up HEROES
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Observables ใช้สำหรับติดตามข้อมูล ในที่นี่คือ Hero
  // getHeroes(): Observable<Hero[]> {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   // of ใช้ในการสร้างและส่งข้อมูลของ observables ให้กับตัวแปรที่กด subscribe
  //   return of(HEROES);
  // }
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  // ส่งข้อมูลของ Hero by id ที่รับมา
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
