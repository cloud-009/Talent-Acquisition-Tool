import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Service/Candidate/candidates.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  candidateForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: CandidatesService, private router: Router) { }


  ngOnInit(): void {
    this.formControls();
  }

  formControls() {
    this.candidateForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      currentCTC: new FormControl('', Validators.required),
      expectedCTC: new FormControl('', Validators.required),
      currentLocation: new FormControl('', Validators.required),
      preferredLocation: new FormControl('', Validators.required),
      appliedFor: new FormControl('', Validators.required),
      recommendation: new FormControl('', Validators.required),
      primarySkill: new FormControl('', Validators.required),
      secondarySkill: new FormControl('', Validators.required),
      createdDate: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      hiringManager: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      noticePeriod: new FormControl('', Validators.required),
      fileUpload: new FormControl(''),
    })
  }


  submitFormData() {
    if (this.candidateForm) {
      this.service.createCandidate(this.candidateForm.value).subscribe({
        next: (res: any) => {
          this.candidateForm.reset();
          this.router.navigateByUrl('/candidate/allcandidates');
        }, error: (err: any) => {
          console.log(err);
        }
      })
    }
  }
}
