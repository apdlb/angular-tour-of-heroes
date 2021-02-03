import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$?: Observable<Crisis | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.crisis$ = this.service.getCrisis(id);
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }
}
