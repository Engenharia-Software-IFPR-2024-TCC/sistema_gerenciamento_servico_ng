import { Observable, Subject } from "rxjs";
import { IEventService } from "../interfaces/event-service.interface";

export class ASubjectEvent<T> implements IEventService<T> {
    event$ = new Subject<T>();

    next$(event: T): Observable<T> {
        this.event$.next(event);

        return this.event$.asObservable();
    }

    get$(): Observable<T> {
        return this.event$.asObservable();
    }
}
