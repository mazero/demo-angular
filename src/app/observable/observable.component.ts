import { AsyncSubject, BehaviorSubject, ConnectableObservable, from, interval, ObjectUnsubscribedError, observable, Observable, Observer, of, ReplaySubject, Subject, Subscription, timer } from 'rxjs';
import { merge as mergeStatic } from 'rxjs';
import { count, filter, map, max, multicast, take } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Rx from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {
  public status: string = '';
  public tab: number[] = [];
  private subscription: Subscription;
  public test: any; 
  public test2: any;
  private subject = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
  const subject: AsyncSubject<number> = new AsyncSubject<number>();
    subject.next(0);
    subject.subscribe({ next: (value) => console.log(`A : ${value}`)})

    subject.next(1);
    subject.next(2);

    subject.subscribe({ next: (value) => console.log(`B : ${value}`)})
    subject.complete();

 /*   // number of elements in the history !!!
   const subject: ReplaySubject<number> = new ReplaySubject<number>(1);
    subject.next(0);
    subject.subscribe({ next: (value) => console.log(`A : ${value}`)})

    subject.next(1);
    subject.next(2);

    subject.subscribe({ next: (value) => console.log(`B : ${value}`)})


    subject.next(3);
       const subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    subject.subscribe({
      next: (value) => console.log(`A : ${value}`)
    })

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (value) => console.log(`B : ${value}`)
    })
    subject.next(3);
const observable: Observable<number> =  interval(1000).pipe(take(10));
    const subject = new Subject<number>();
    const multicasted = observable.pipe(multicast(subject)) as ConnectableObservable<number>;

    const a = multicasted.subscribe({
      next: (value) => console.log(`A : ${value}`)
    });
    const b = multicasted.subscribe({
      next: (value) => console.log(`B : ${value}`)
    });

    subject.next(2);
    subject.next(3);
    subject.next(5);


    multicasted.connect();

    setTimeout(() => a.unsubscribe(), 3000);
	  setTimeout(() => b.unsubscribe(), 5000);

 
  
  /*  this.subject.subscribe({
      next: (value) => console.log(`A : ${value}`)
    });
    this.subject.subscribe({
      next: (value) => console.log(`B : ${value}`)
    });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);

  


      const array = [1,2,3];
    const observable: Observable<number> = interval(1000).pipe(
      take(10),
      count(el => el% 2 === 0),
      filter(el => el% 2 === 0)
  max(),
      map(el => el + 3),
      filter(el => el% 2 === 0) 
    );
    this.subscription = observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'finished';
        console.log(this.test);
        console.log(this.test2)
      }
    )

      const observable1: Observable<number> = of(1,2,3);
      const observable2: Observable<number> = of(4,5,6);
      const merged = mergeStatic(observable1, observable2);
      merged.subscribe(
        (value) => {
          this.tab.push(value);
        },
        (error) => {
          this.status = error;
        },
        () => {
        this.status = 'finished';
        }
      );*/ 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subject.unsubscribe();
  }

}
