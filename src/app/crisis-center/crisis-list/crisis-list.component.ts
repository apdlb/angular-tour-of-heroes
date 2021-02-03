import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  crises$?: Observable<Crisis[]>;
  selectedId?: number;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // (+) before `params.get()` turns the string into a number
        const id = params.get('id');

        if (id) this.selectedId = +id;

        return this.crisisService.getCrises();
      })
    );
  }
}
