import { BehaviorSubject, Observable } from "rxjs";
import { IStateService } from "../interfaces/state-service.interface";

export class ABehaviorSubjectState<T> implements IStateService<T> {
    state$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

    update(state: T | null): Observable<T | null> {
        this.state$.next(state);

        return this.state$.asObservable();
    }

    get$(): Observable<T | null> {
        return this.state$.asObservable();
    }
}
