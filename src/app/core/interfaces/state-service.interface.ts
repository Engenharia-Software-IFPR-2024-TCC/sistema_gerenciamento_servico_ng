import { BehaviorSubject, Observable } from "rxjs";

export interface IStateService<T> {
  state$: BehaviorSubject<T | null>;

  update(state: T): Observable<T | null>;

  get$(): Observable<T | null>;
}
