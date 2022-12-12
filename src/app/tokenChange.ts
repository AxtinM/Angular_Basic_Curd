import { fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

export const tokenChange = fromEvent(window, 'storage').pipe(
  filter((event: any) => {
    console.log(event);
    return event.key === 'id_token';
  }),

  map((event: any) => event.newValue),

  tap((value) => console.log(value))
);
