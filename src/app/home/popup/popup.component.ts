import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RequistiondataService } from '../../Service/Requisition/requistiondata.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  referForm!: FormGroup;


  constructor(private fb: FormBuilder, private service: RequistiondataService, public dialogRef: MatDialogRef<PopupComponent>) { }


  ngOnInit(): void {
    this.referFormControls();
  }

  referFormControls() {
    this.referForm = this.fb.group({
      candidateDetails: this.fb.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        contactInfo: ["", Validators.required],
        email: ["", Validators.required]
      }),
      employeeDetails: this.fb.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required]
      })
    })
  }

  postFormControls() {
    if (this.referForm.valid) {
      this.service.postPopupFormData(this.referForm.value).subscribe({
        next: (res: any) => {
          this.referForm.reset();
          this.dialogRef.close();
        }, error: (err: any) => {
          console.log(err);
        }
      })
    }
  }

}
