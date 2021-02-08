import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "../counter.actions";
import { counterReducer } from "../counter.reducer";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html"
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select("count");
  }

  ngOnInit(): void {}

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
