import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Service/Candidate/candidates.service';
@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class OpeningsComponent {

  heroes: any;

  constructor(public canservice: CandidatesService, private router: Router) { }

  ngOnInit(): void {
    this.getFilteredData();
  }

  listDisplay: boolean = false;
  cardDisplay: boolean = true;

  searchText: any;

  changeListDisplay() {
    this.cardDisplay = false;
    this.listDisplay = true;
  }

  changeCardDisplay() {
    this.listDisplay = false;
    this.cardDisplay = true;
  }

  getFilteredData() {
    this.canservice.get().subscribe({
      next: (res) => {
        this.heroes = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
