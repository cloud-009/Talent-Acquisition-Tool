import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RequistiondataService } from '../../Service/Requisition/requistiondata.service';
import { reqFormData } from './requisitionform.module';
import { Router } from '@angular/router';

interface gradeLevel {
  value: string;
  viewValue: string;
}

interface urgency {
  value9: string;
  viewValue9: string;
}

interface contractType {
  value10: string;
  viewValue10: string;
}
interface currencyName {
  value1: string;
  viewValue1: string;
}
interface employmentType {
  value2: string;
  viewValue2: string;
}

interface NatureofV {
  value3: string;
  viewValue3: string;
}

interface vacancyT {
  value4: string;
  viewValue4: string;
}
interface jobTemp {
  value: string;
  viewValue: string;
}
interface hrRole {
  value5: string;
  viewValue5: string;
}
interface HrRoleName {
  value6: string;
  viewValue6: string;
}

interface RmName {
  value7: string;
  viewValue7: string;
}

interface Manager {
  value8: string;
  viewValue8: string;
}


@Component({
  selector: 'app-requisitionform',
  templateUrl: './requisitionform.component.html',
  styleUrls: ['./requisitionform.component.css'],
  providers: []
})
export class RequisitionformComponent implements OnInit {

  panelOpenState = false;
  selectedValue: string | undefined;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;

  isTemplate: boolean = true;

  checkdiv: boolean = true;
  checkdiv1: boolean = true;
  checkdiv2: boolean = true;
  checkdiv3: boolean = true;
  checkdiv4: boolean = true;
  checkdiv5: boolean = true;
  checkdiv6: boolean = true;
  checkdiv7: boolean = true;
  checkdiv8: boolean = true;
  checkdiv9: boolean = true;

   formData : any [] = [
    {
      "id": 1,
      "name": "Project Manager",
      "presenter": "AWS",
      "candidates": "5",
      "internalreview": "12",
      "submitted": "4",
      "clientInterview": "1",
      "References": "5",
      "offers": "2",
      "interview 1": "3",
      "interview 2": "1",
      "jobTitle": "Project Manager",
      "urgency": "Low",
      "serviceCatalog": "catalog",
      "primary": "Agile, Scrum, Problem solving",
      "secondary": "Risk management, Customer management, Conflict resolution",
      "designation": "manager",
      "organizationUnit": "wissen",
      "gradeLevel": "Level-1",
      "functionalArea": "banagalore",
      "team": "10",
      "client": "us",
      "project": "wissen",
      "experience": 22,
      "vacancyCount": 2,
      "raisedFDate": "2023-01-11T18:30:00.000Z",
      "raisedTDate": "2023-01-10T18:30:00.000Z",
      "requiredDate": "2023-01-24T18:30:00.000Z",
      "contractType": "Temporary",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "",
      "education": "Graduate",
      "reportingManager": "Parley",
      "hiringManager": "Jhonny Depp",
      "jobDescription": "Collaborate with front-end developers, testers,architects to build strucutre of application",
      "rolesResponsibilities": "Ensure the website performs correctly, focusing on databases, backend logic, API's",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\certified.png",
      
    }
   ];

 pushDataToForm(){
  this.formData.push(this.postFormData)
  console.log('form data',this.formData)
 }


  constructor(private _formBuilder: FormBuilder, private router:Router, private service: RequistiondataService) { }

  changeTemplate() {
    this.isTemplate = !this.isTemplate;
  }

  getCheckedData(event: any) {
    let checked = document.getElementsByClassName('check')
    if (event.checked) {
      console.log(event)
      this.checkdiv = false
    }
    else if (event.checked === false) {
      this.checkdiv = true
    }

  }
  getCheckedData1(event: any) {
    let checked = document.getElementsByClassName('check1')
    if (event.checked) {
      console.log(event)
      this.checkdiv1 = false
    }
    else if (event.checked === false) {
      this.checkdiv1 = true
    }

  }
  getCheckedData2(event: any) {
    let checked = document.getElementsByClassName('check2')
    if (event.checked) {
      console.log(event)
      this.checkdiv2 = false
    }
    else if (event.checked === false) {
      this.checkdiv2 = true
    }

  }

  getCheckedData3(event: any) {
    let checked = document.getElementsByClassName('check3')
    if (event.checked) {
      console.log(event)
      this.checkdiv3 = false
    }
    else if (event.checked === false) {
      this.checkdiv3 = true
    }

  }
  getCheckedData4(event: any) {
    let checked = document.getElementsByClassName('check4')
    if (event.checked) {
      console.log(event)
      this.checkdiv4 = false
    }
    else if (event.checked === false) {
      this.checkdiv4 = true
    }

  }
  getCheckedData5(event: any) {
    let checked = document.getElementsByClassName('check5')
    if (event.checked) {
      console.log(event)
      this.checkdiv5 = false
    }
    else if (event.checked === false) {
      this.checkdiv5 = true
    }

  }
  getCheckedData6(event: any) {
    let checked = document.getElementsByClassName('check6')
    if (event.checked) {
      console.log(event)
      this.checkdiv6 = false
    }
    else if (event.checked === false) {
      this.checkdiv6 = true
    }

  }
  getCheckedData7(event: any) {
    let checked = document.getElementsByClassName('check7')
    if (event.checked) {
      console.log(event)
      this.checkdiv7 = false
    }
    else if (event.checked === false) {
      this.checkdiv7 = true
    }

  }
  getCheckedData8(event: any) {
    let checked = document.getElementsByClassName('check8')
    if (event.checked) {
      console.log(event)
      this.checkdiv8 = false
    }
    else if (event.checked === false) {
      this.checkdiv8 = true
    }

  }
  getCheckedData9(event: any) {
    let checked = document.getElementsByClassName('check9')
    if (event.checked) {
      console.log(event)
      this.checkdiv9 = false
    }
    else if (event.checked === false) {
      this.checkdiv9 = true
    }

  }

  reqFormdobj: reqFormData = new reqFormData

  Grade: gradeLevel[] = [
    { value: 'Level-1', viewValue: 'Level1' },
    { value: 'Level-2', viewValue: 'Level2' },
    { value: 'Level-3', viewValue: 'Level3' },
  ];
  Contract: contractType[] = [
    { value10: 'Temporary', viewValue10: 'Temporary' },
    { value10: 'Permanent', viewValue10: 'Permanent' },

  ];
  Currency: currencyName[] = [
    { value1: '$(USD)', viewValue1: '$(USD)' },
    { value1: '£(POUND)', viewValue1: '£(POUND)' },
    { value1: '₹(INR)', viewValue1: ' ₹(INR)' },

  ];
  Employment: employmentType[] = [
    { value2: 'Part-Time', viewValue2: 'Part-Time' },
    { value2: 'Full-Time', viewValue2: 'Full-Time' },
    { value2: 'Consultant', viewValue2: 'Consultant' },

  ];
  NatureofVacancy: NatureofV[] = [
    { value3: 'Additional', viewValue3: 'Additional' },
    { value3: 'New', viewValue3: 'New' },
    { value3: 'Replacement', viewValue3: 'Replacement' },

  ];
  vacancyType: vacancyT[] = [
    { value4: 'Budget', viewValue4: 'Budget' },
    { value4: 'Non-Budget', viewValue4: 'Non-Budget' },

  ];
  jobTemps: jobTemp[] = [
    { value: 'All-JobTemp', viewValue: 'All-JobTemp' },
    { value: 'MyTemp', viewValue: 'MyTemp' },

  ];

  HrRole: hrRole[] = [
    { value5: 'HR', viewValue5: 'HR' },
    { value5: 'Reporting Manager', viewValue5: 'Reporting Manager' },
    { value5: 'Manager', viewValue5: 'Manager' }
  ]
  HrRoleName: HrRoleName[] = [
    { value6: 'vinitha daggupati', viewValue6: 'vinitha daggupatia' },
    { value6: 'Suchismita', viewValue6: 'Suchismita' },
    { value6: 'Sushmarao', viewValue6: 'Sushmarao' },
    { value6: 'Adithya Dikkala', viewValue6: 'Adithya Dikkala' },

  ]
  RmRoleName: RmName[] = [
    { value7: 'Sindhuri Meegada', viewValue7: 'Sindhuri Meegada' },
    { value7: 'Rohini Sudha', viewValue7: 'Rohini Sudha' },
    { value7: 'Pavan Bhagi', viewValue7: 'Pavan Bhagi' },
    { value7: 'Girish Kumar', viewValue7: 'Girish Kumar' },
  ]

  MRoleName: Manager[] = [
    { value8: 'Anuradha Pogalur', viewValue8: 'Anuradha Pogalur' },
    { value8: 'Chary Podichett', viewValue8: 'Chary Podichett' },
    { value8: 'Sreekrishna', viewValue8: 'Sreekrishna' },
    { value8: 'Sirisha Guntur', viewValue8: 'Sirisha Guntur' },
  ]

  Urgency: urgency[] = [
    { value9: 'HIGH', viewValue9: 'High' },
    { value9: 'MEDIUM', viewValue9: 'Medium' },
    { value9: 'LOW', viewValue9: 'Low' },
  ]



  postFormData!: FormGroup
  results: any;
  selectedFile: any;
  id: any;



  ngOnInit(): void {
    this.postFormData = this._formBuilder.group({
      jobTitle: ["", Validators.required],
      urgency: ["", Validators.required],
      serviceCatalog: ["", Validators.required],
      primary: ["", Validators.required],
      secondary: ["", Validators.required],
      designation: ["", Validators.required],
      organizationUnit: ["", Validators.required],
      gradeLevel: ["", Validators.required],
      functionalArea: ["", Validators.required],
      team: ["", Validators.required],
      client: [""],
      project: ["", Validators.required],
      experience: ["", Validators.required],
      vacancyCount: ["", Validators.required],
      raisedFDate: ["", Validators.required],
      raisedTDate: ["", Validators.required],
      requiredDate: ["", Validators.required],
      contractType: ["", Validators.required],
      currencyName: ["", Validators.required],
      employmentType: ["", Validators.required],
      NatureofV: [""],
      vacancyT: [""],
      lob: [""],
      maxRelevantExperience: [""],
      certificate: [""],

      skills: ["", Validators.required],
      education: [""],
      jobDescription: ["", Validators.required],
      rolesResponsibilities: ["", Validators.required],
      jobLocation: ["", Validators.required],
      fileUpload: [""],
      maxCtc: ["", Validators.required],
      shiftTiming: ["", Validators.required],
      domain: ["", Validators.required],
      goodSkills: ["", Validators.required],
      hiringManager: ["", Validators.required],
      screening: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      shortlisting: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      qualitativeAssessment: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      behaviouralAssessment: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      videoAssessment: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      interview1: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      interview2: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      hrInterview: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      documentation: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
      offer: this._formBuilder.group({
        role: [""],
        person: [""],
        serviceLevelAgreement: [""]
      }),
    });
    this.editFormData();


    this.getAllData();

  }



  getAllData() {
    this.service.getFormData().subscribe((res) => {
      this.results = res
    })
  }


  reqFormData() {
    // console.log(this.postFormData.value);
    // let uniqueID:any = crypto.randomUUID();
    this.service.postFormData(this.postFormData.value).subscribe
      ({
        next: (res) => {
          // console.log(res);
          this.postFormData.reset()
          this.getAllData()
          this.router.navigateByUrl('/jobs/alljobs')

        }, error: (err) => {
          console.log(err);
        }
      })
  }

  editFormData() {
    this.service.requisitionForm.subscribe(data => {
      console.log(data);
      this.postFormData.controls['jobTitle'].setValue(data.jobTitle)
      this.postFormData.controls['primary'].setValue(data.primary)
      this.postFormData.controls['secondary'].setValue(data.secondary)
      this.postFormData.controls['serviceCatalog'].setValue(data.serviceCatalog)
      this.postFormData.controls['designation'].setValue(data.designation)
      this.postFormData.controls['organizationUnit'].setValue(data.organizationUnit)
      this.postFormData.controls['gradeLevel'].setValue(data.gradeLevel)
      this.postFormData.controls['functionalArea'].setValue(data.functionalArea)
      this.postFormData.controls['team'].setValue(data.team)
      this.postFormData.controls['client'].setValue(data.client)
      this.postFormData.controls['project'].setValue(data.project)
      this.postFormData.controls['experience'].setValue(data.experience)
      this.postFormData.controls['vacancyCount'].setValue(data.vacancyCount)
      this.postFormData.controls['raisedFDate'].setValue(data.raisedFDate)
      this.postFormData.controls['raisedTDate'].setValue(data.raisedTDate)
      this.postFormData.controls['requiredDate'].setValue(data.requiredDate)
      this.postFormData.controls['contractType'].setValue(data.contractType)
      this.postFormData.controls['currencyName'].setValue(data.currencyName)
      this.postFormData.controls['employmentType'].setValue(data.employmentType)
      this.postFormData.controls['NatureofV'].setValue(data.NatureofV)
      this.postFormData.controls['vacancyT'].setValue(data.vacancyT)
      this.postFormData.controls['skills'].setValue(data.skills)
      this.postFormData.controls['education'].setValue(data.education)
      this.postFormData.controls['jobDescription'].setValue(data.jobDescription)
      this.postFormData.controls['rolesResponsibilities'].setValue(data.rolesResponsibilities)
      this.postFormData.controls['jobLocation'].setValue(data.jobLocation)
      this.postFormData.controls['urgency'].setValue(data.urgency)
      this.postFormData.controls['fileUpload'].setValue(data.fileUpload)

    });
  }

  deleteData(data: any) {
    if (confirm('Are you sure to delete?'))
      this.service.deleteFormData(data.id).subscribe(() => {
        Swal.fire('Thank you...', 'Template deleted succesfully!', 'success')
        this.getAllData()
      })
  }



  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  skip = 0;
  setSkip(index: number) {
    this.skip = index;
  }

  nextSkip() {
    this.skip++;
  }

  prevSkip() {
    this.skip--;
  }



  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }

  clearAllFields() {
    this.postFormData.reset();
  }

  clearTitlesTechnologies() {
    this.postFormData.controls['jobTitle'].reset()
    this.postFormData.controls['urgency'].reset()
    this.postFormData.controls['serviceCatalog'].reset()
    this.postFormData.controls['primary'].reset()
    this.postFormData.controls['secondary'].reset()
  }

  clearCOE() {
    this.postFormData.controls['functionalArea'].reset()
    this.postFormData.controls['team'].reset()
    this.postFormData.controls['client'].reset()
    this.postFormData.controls['project'].reset()
    this.postFormData.controls['designation'].reset()
    this.postFormData.controls['organizationUnit'].reset()
    this.postFormData.controls['gradeLevel'].reset()
    this.postFormData.controls['raisedFDate'].reset()
    this.postFormData.controls['raisedTDate'].reset()
    this.postFormData.controls['requiredDate'].reset()
    this.postFormData.controls['maxCtc'].reset()
    this.postFormData.controls['lob'].reset()
    this.postFormData.controls['currencyName'].reset()
  }

  clearRequisitionDetails() {
    this.postFormData.controls['skills'].reset()
    this.postFormData.controls['goodSkills'].reset()
    this.postFormData.controls['education'].reset()
    this.postFormData.controls['jobDescription'].reset()
    this.postFormData.controls['rolesResponsibilities'].reset()
    this.postFormData.controls['experience'].reset()
    this.postFormData.controls['shiftTiming'].reset()
    this.postFormData.controls['jobLocation'].reset()
    this.postFormData.controls['domain'].reset()
    this.postFormData.controls['maxRelevantExperience'].reset()
    this.postFormData.controls['certificate'].reset()
  }

  clearRequisitionType() {
    this.postFormData.controls['contractType'].reset()
    this.postFormData.controls['employmentType'].reset()
    this.postFormData.controls['NatureofV'].reset()
    this.postFormData.controls['vacancyT'].reset()
    this.postFormData.controls['vacancyCount'].reset()
  }

  clearFileUpload() {
    this.postFormData.controls['fileUpload'].reset()
  }



}


