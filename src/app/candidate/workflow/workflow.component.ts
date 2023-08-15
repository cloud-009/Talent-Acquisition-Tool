import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkflowService } from '../../Service/Workflow/workflow.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CandidatesService } from 'src/app/Service/Candidate/candidates.service';



@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false },
  }

  ],
})


export class WorkflowComponent implements OnInit, AfterViewInit {
  firstGroup!: FormGroup;
  isPopupOpen = false;
  radioButtonCancel: boolean = true;

  screen: any;
  short: any;
  qualitative: any;
  behavioural: any;
  video: any;
  interview1: any;
  interview2: any;
  hr: any;
  documentation: any;
  offer: any;
  newData: any;
  selectedStepIndex = 0;
  step = 0;
  results: any;
  onStepChange: any;
  displayBasic: boolean = false;
  isExpanded: boolean = true;
  radio: any;
  isEditable = false;
  candidateID: any;
  candidateResponse: any;

  accordian: any = [
    {
      "screen": "Completed",
      "short": "Completed",
      "qualitative": "Pending",
      "behavioural": "Completed",
      "video": "Pending",
      "id": 1
    }
  ];

  candidatesData: any = [
    {
      "firstName": "Emilia",
      "lastName": "Clarke",
      "experience": "2",
      "currentCTC": "300000",
      "expectedCTC": "500000",
      "currentLocation": "Bangalore",
      "preferredLocation": "Hyderabad",
      "appliedFor": "Junior Engineer",
      "recommendation": "None",
      "primarySkill": "Java,php",
      "secondarySkill": "Javascript,css",
      "createdDate": "2023-01-31",
      "fileUpload": "",
      "summary": "Worked with esteemed organizations to create the better user experience. ",
      "hiringManager": "Haley",
      "noticePeriod": "30",
      "email": "emilia@clarke.com",
      "contactInfo": "9876543210",
      "id": 1
    },
    {
      "firstName": "Alexandra",
      "lastName": "Bieber",
      "experience": "5",
      "currentCTC": "8,00,000",
      "expectedCTC": "12,00,000",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "appliedFor": "UI Designer",
      "recommendation": "Bella Adams",
      "primarySkill": "Wireframing, Photoshop",
      "secondarySkill": "Figma",
      "createdDate": "2023-02-01",
      "summary": "5 years of experience working with photoshop to fulfill the client's needs.",
      "hiringManager": "Caroline",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "alexandra@beiber.com",
      "contactInfo": "9876543210",
      "id": 2
    },
    {
      "firstName": "Gordon",
      "lastName": "Ramsey",
      "experience": "10",
      "currentCTC": "25,00,000",
      "expectedCTC": "35,00,000",
      "currentLocation": "Delhi",
      "preferredLocation": "Delhi",
      "appliedFor": "Senior Architect",
      "recommendation": "Dominic Allan",
      "primarySkill": "Java,SQL,Node,MongoDB",
      "secondarySkill": "JavaScript,CSS,Angular",
      "createdDate": "2023-02-10",
      "summary": "Experience in creating the architecture of the application",
      "hiringManager": "Emma Bell",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "gordon@ramsey.com",
      "contactInfo": "9876543210",
      "id": 3
    },
    {
      "firstName": "Harry",
      "lastName": "Brown",
      "experience": "5",
      "currentCTC": "13,00,000",
      "expectedCTC": "18,00,000",
      "currentLocation": "Wales",
      "preferredLocation": "Wales",
      "appliedFor": "Senior Software Engineer",
      "recommendation": "None",
      "primarySkill": "Java,Javascript,Node",
      "secondarySkill": "AWS,Power-BI",
      "createdDate": "2023-02-01",
      "summary": "5 years of experience working with the latest technology and building apps.",
      "hiringManager": "Emily Campbell",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "harry@brown.com",
      "contactInfo": "9876543210",
      "id": 4
    },
    {
      "status": "offer",
      "firstName": "Alexandra",
      "lastName": "Bieber",
      "experience": "5",
      "currentCTC": "8,00,000",
      "expectedCTC": "12,00,000",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "appliedFor": "UI Designer",
      "recommendation": "Bella Adams",
      "primarySkill": "Wireframing, Photoshop",
      "secondarySkill": "Figma",
      "createdDate": "2023-02-01",
      "summary": "5 years of experience working with photoshop to fulfill the client's needs.",
      "hiringManager": "Caroline",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "alexandra@beiber.com",
      "contactInfo": "9876543210",
      "id": 5
    },
    {
      "firstName": "Gordon",
      "lastName": "Ramsey",
      "experience": "10",
      "currentCTC": "25,00,000",
      "expectedCTC": "35,00,000",
      "currentLocation": "Delhi",
      "preferredLocation": "Delhi",
      "appliedFor": "Senior Architect",
      "recommendation": "Dominic Allan",
      "primarySkill": "Java,SQL,Node,MongoDB",
      "secondarySkill": "JavaScript,CSS,Angular",
      "createdDate": "2023-02-10",
      "summary": "Experience in creating the architecture of the application",
      "hiringManager": "Emma Bell",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "gordon@ramsey.com",
      "contactInfo": "9876543210",
      "id": 6
    },
    {
      "firstName": "Diana",
      "lastName": "Bell",
      "experience": "2",
      "currentCTC": "6,00,000",
      "expectedCTC": "10,00,000",
      "currentLocation": "Bangalore",
      "preferredLocation": "Pune",
      "appliedFor": "AWS Developer",
      "recommendation": "Harry Styles",
      "primarySkill": "Deployment, Security",
      "secondarySkill": "Debugging, Databases",
      "createdDate": "2023-01-31",
      "summary": "Understanding of core AWS services, uses & basic AWS architecture best practices.",
      "hiringManager": "Amelia",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "diana@bell.com",
      "contactInfo": "9876543210",
      "id": 7
    },
    {
      "firstName": "Emilia",
      "lastName": "Clarke",
      "experience": "2",
      "currentCTC": "300000",
      "expectedCTC": "500000",
      "currentLocation": "Bangalore",
      "preferredLocation": "Hyderabad",
      "appliedFor": "Junior Engineer",
      "recommendation": "None",
      "primarySkill": "Java,php",
      "secondarySkill": "Javascript,css",
      "createdDate": "2023-01-31",
      "fileUpload": "",
      "summary": "Worked with esteemed organizations to create the better user experience. ",
      "hiringManager": "Haley",
      "noticePeriod": "30",
      "email": "emilia@clarke.com",
      "contactInfo": "9876543210",
      "id": 8
    },
    {
      "firstName": "Alexandra",
      "lastName": "Bieber",
      "experience": "5",
      "currentCTC": "8,00,000",
      "expectedCTC": "12,00,000",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "appliedFor": "UI Designer",
      "recommendation": "Bella Adams",
      "primarySkill": "Wireframing, Photoshop",
      "secondarySkill": "Figma",
      "createdDate": "2023-02-01",
      "summary": "5 years of experience working with photoshop to fulfill the client's needs.",
      "hiringManager": "Caroline",
      "fileUpload": "",
      "noticePeriod": "30",
      "email": "alexandra@beiber.com",
      "contactInfo": "9876543210",
      "id": 9
    }
  ];


  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  panelOpenState = false;
  StepperStatus: any;


  constructor(private _formBuilder: FormBuilder,
    public _WorkflowService: WorkflowService,
    private router: Router, private primengConfig: PrimeNGConfig,
    private activatedRoute: ActivatedRoute, private changeDetection: ChangeDetectorRef,
    private candidateService: CandidatesService) {

    this.firstGroup = this._formBuilder.group({
      screen: ["", Validators.required],
      short: ["", Validators.required],
      qualitative: ["", Validators.required],
      behavioural: ["", Validators.required],
      video: ["", Validators.required],
      interview1: ["", Validators.required],
      interview2: ["", Validators.required],
      hr: ["", Validators.required],
      documentation: ["", Validators.required],
      offer: ["", Validators.required]
    })
  }


  ngAfterViewInit(): void {
    this.getPanelName();
    this.getCandidateDetails();
  }


  getPanelName() {
    this.activatedRoute.queryParams.subscribe({
      next: (res: any) => {
        this.candidateResponse = res;
        console.log(this.candidateResponse.id);
        this.candidateID = this.candidateResponse.id;
        let panelName = res.panel;
        if (panelName) {
          this.openExpansionPanel(panelName);
        }
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

  openExpansionPanel(panelName: any) {
    let panel = this.panels.toArray();
    if (panel) {
      let index: any = parseInt(panelName, 10);
      panel[index].expanded = true;
    }
    this.changeDetection.detectChanges();
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  closeDialog() {
    this.displayBasic = false
  }

  submit() {
    this._WorkflowService.postAccordian(this.firstGroup.value).subscribe((res) => {
      console.log(res)
    })

  }


  radioButton(name: any) {
    if (name == 'screen') {
      this.screen = ''
    }
    else if (name == 'short') {
      this.short = ''
    }
    else if (name == 'qualitative') {
      this.qualitative = ''
    }
    else if (name == 'behavioural') {
      this.behavioural = ''
    }
    else if (name == 'video') {
      this.video = ''
    }
    else if (name == 'interview1') {
      this.interview1 = ''
    }
    else if (name == 'interview2') {
      this.interview2 = ''
    }
    else if (name == 'hr') {
      this.hr = ''
    }
    else if (name == 'documentation') {
      this.documentation = ''
    }
    else if (name == 'offer') {
      this.offer = ''
    }

  }


  updateAccordian() {
    this.accordian.forEach((ele: any) => {
      this._WorkflowService.UpdateAccordian(ele.id, this.firstGroup.value).subscribe((res) => {
        console.log(res)
        location.reload();
        // this.getAccordianData();   
      })
    });
  }


  getAccordianData() {
    // this._WorkflowService.getAccordian().subscribe((res) => {
    //   this.accordian = res
    this.accordian.forEach((ele: any) => {
      this.firstGroup.patchValue({
        screen: ele.screen,
        short: ele.short,
        qualitative: ele.qualitative,
        behavioural: ele.behavioural,
        video: ele.video,
        interview1: ele.interview1,
        interview2: ele.interview2,
        hr: ele.hr,
        documentation: ele.documentation,
        offer: ele.offer,

      })
    });
    // })
  }


  //-------------------------------------------


  ngOnInit() {
    // this._WorkflowService.get().subscribe(res => {
    //   this.newData = res;
    // })
    this.primengConfig.ripple = true;
    this.getAccordianData();
  }

  //Pdf Resume File Download
  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '');
    link.setAttribute('download', `Resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }

  routeToRequisition(id: any) {
    this.router.navigate([`/jobs/reqdet/${id}/jobdet/`], { queryParams: { id: id } });
  }

  getCandidateDetails() {
    this.candidatesData;
  }



}

