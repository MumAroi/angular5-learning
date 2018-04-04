import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import โครงสร้าง obj ของ hero
import { Hero } from './hero';
// import mocker up date ของ hero
// import { HEROES } from './mock-heroes';

// rxjs อ่านเพิ่มเติมได้ในเรื่อง Reactive Programming
// import Onservable ที่ใช้ในการติดตามข้อมูล
import { Observable } from 'rxjs/Observable';
// ใช้ of แทน คำสั่ง create ของ rxjs
import { of } from 'rxjs/observable/of';
// import error handling
import { catchError, map, tap } from 'rxjs/operators';

// import service message
import { MessageService } from './message.service';

// ประกาศ headers option ที่จะใช้ในการ put, post
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  // url ของ api ที่ใช้ get heroes data จากการ export in-memory-data.service.ts ( address of the heroes resource on the server. )
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    // แทนค่า HttpClient ผ่านตัวแปร http
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
  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }
  // get hero data from  api/heroes
  // get heores : get
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  // ส่งข้อมูลของ Hero by id ที่รับมา
  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
  // get hero by id : get
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // update hero : put
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // add new hero : post
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  // delete hero by hero id : delete
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // seaech hero : get
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  // func แสดง log
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
