import { Observable, Subject } from "rxjs";

export interface IEventService<T> {
    event$: Subject<T>;

    next$(state: T): Observable<T>;

    get$(): Observable<T>;
}
