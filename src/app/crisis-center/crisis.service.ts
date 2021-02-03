import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CrisisService: fetched heroes');
    return of(CRISES);
  }

  getCrisis(id: string | null): Observable<Crisis | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CrisisService: fetched hero id=${id}`);
    return of(CRISES.find((crisis) => id && crisis.id === +id));
  }
}
