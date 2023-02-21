import { Component } from '@angular/core';
import { of, Observable, map, from, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //define number$ as an Observable
  numbers$: Observable<number>;
  constructor() {}
}
//create an array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//subscribing to the Observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using map
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create an observable with an array with an array observable of users objects
const user = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];

//create the observable
const user$ = from(user);
user$.subscribe((user) => console.log(user));

//subscribe to this observable

user$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age * 2,
    }))
  )

  //Reaction Programming demo exercise
  .subscribe((user) => console.log(user));

console.log('\n\nEven:');
numbers$
  .pipe(filter((numbers) => numbers % 2 == 0))
  .subscribe((numbers) => console.log(numbers));

console.log('\n\nOdd:');
numbers$
  .pipe(filter((numbers) => numbers % 2 != 0))
  .subscribe((numbers) => console.log(numbers));

console.log('\n\nOdd * 2:');
numbers$
  .pipe(filter((numbers) => numbers % 2 == 0))
  .subscribe((numbers) => console.log(`${numbers} = ${numbers * 2}`));
