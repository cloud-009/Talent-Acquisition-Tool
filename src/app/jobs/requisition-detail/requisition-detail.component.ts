import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CandidatesService } from '../../Service/Candidate/candidates.service';
import { RequistiondataService } from '../../Service/Requisition/requistiondata.service';

@Component({
  selector: 'app-requisition-detail',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit {

  newData: any;
  public opening: any;
  totalJob: any;
  backendData: any;
  filterData: any;
  linkActive: boolean = false;
  card: any;
  gridRequisitionID: any;
  isHighlighted: number | null = null;

  cardsArray: any[] = [
    { id: 1, title: 'Candidates', count: 12 },
    { id: 2, title: 'Screening', count: 9 },
    { id: 3, title: 'Shortlisting', count: 7 },
    { id: 4, title: 'Q.Assessment', count: 6 },
    { id: 5, title: 'B.Assessment', count: 6 },
    { id: 6, title: 'V.Assessment', count: 6 },
    { id: 7, title: 'Interview1', count: 6 },
    { id: 8, title: 'Interview2', count: 4 },
    { id: 9, title: 'HR', count: 3 },
    { id: 10, title: 'Documents', count: 2 },
    { id: 11, title: 'Offer', count: 1 },
  ];

  getFormData: any = [
    {
      "jobTitle": "UI Designer",
      "urgency": "High",
      "serviceCatalog": "catalog",
      "primary": "figma, photoshop, wireframes",
      "secondary": "Javascript, Angularjs, nodejs, rxjs",
      "designation": "Web developer",
      "organizationUnit": "Microservices",
      "gradeLevel": "Level-1",
      "functionalArea": " Bangalore",
      "team": "9",
      "client": "TILA",
      "project": "tila",
      "experience": 232,
      "vacancyCount": 343,
      "raisedFDate": "2023-01-19T18:30:00.000Z",
      "raisedTDate": "2023-01-19T18:30:00.000Z",
      "requiredDate": "2023-01-19T18:30:00.000Z",
      "contractType": "Temporary",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "html, css, bootstrap, JS, angular, node ,rxjs, ",
      "education": "Graduate",
      "reportingManager": "Parley",
      "hiringManager": "Dakota Jhonson",
      "jobDescription": "Responsible for alignemnts of web design, user experience and change wireframes into resposnsive design.",
      "rolesResponsibilities": "Develop new user-facing features, determining the structure and design of web-pages",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\download (3).png",
      "id": 1
    },
    {
      "jobTitle": "Backend Developer",
      "urgency": "High",
      "serviceCatalog": "catalog",
      "primary": "Node JS, Express JS, Sql, Postgreqsl, Deno",
      "secondary": "Javascript, Angularjs,rxjs",
      "designation": "Senior Backend Developer",
      "organizationUnit": "Microservices",
      "gradeLevel": "Level-3",
      "functionalArea": "Hyderabad",
      "team": "10",
      "client": "us",
      "project": "Schneider",
      "experience": 5,
      "vacancyCount": 23,
      "raisedFDate": "2023-01-03T18:30:00.000Z",
      "raisedTDate": "2023-02-08T18:30:00.000Z",
      "requiredDate": "2023-01-24T18:30:00.000Z",
      "contractType": "Permanent",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "",
      "education": "Graduate",
      "reportingManager": "Emilia Clarke",
      "hiringManager": "Dakota Jhonson",
      "jobDescription": "Collaborate with front-end developers, testers, architects to build strucutre of application",
      "rolesResponsibilities": "Ensure the website performs correctly, focusing on databases, backend logic, API's",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\certified.png",
      "id": 2
    },
    {
      "jobTitle": "Frontend Developer",
      "urgency": "Low",
      "serviceCatalog": "catalog",
      "primary": "Html, Css, Bootstrap, Javascript, Angular/React",
      "secondary": "Javascript, Angularjs, nodejs, rxjs",
      "designation": "Senior Frontend Developer",
      "organizationUnit": "Microservices",
      "gradeLevel": "Level-1",
      "functionalArea": "Bangalore",
      "team": "10",
      "client": "us",
      "project": "GE-Aviation",
      "experience": 2,
      "vacancyCount": 23,
      "raisedFDate": "2023-01-11T18:30:00.000Z",
      "raisedTDate": "2023-01-10T18:30:00.000Z",
      "requiredDate": "2023-01-24T18:30:00.000Z",
      "contractType": "Permanent",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "html, css, bootstrap, JS, angular, node ,rxjs, ",
      "education": "Graduate",
      "reportingManager": "Dakota Jhonson",
      "hiringManager": "Jhonny Depp",
      "jobDescription": "Responsible for alignemnts of web design, user experience and change wireframes into resposnsive design.",
      "rolesResponsibilities": "Develop new user-facing features, determining the structure and design of web-pages",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\download (3).png",
      "id": 3
    },
    {
      "jobTitle": "Frontend Developer",
      "urgency": "Medium",
      "serviceCatalog": "catalog",
      "primary": "Html, Css, Bootstrap, Javascript, Angular/React",
      "secondary": "Javascript, Angularjs, nodejs, rxjs",
      "designation": "Junior UI designer",
      "organizationUnit": "Microservices",
      "gradeLevel": "Level-2",
      "functionalArea": "Bangalore",
      "team": "10",
      "client": "us",
      "project": "wissen",
      "experience": 2,
      "vacancyCount": 23,
      "raisedFDate": "2023-02-08T18:30:00.000Z",
      "raisedTDate": "2023-02-27T18:30:00.000Z",
      "requiredDate": "2023-02-25T18:30:00.000Z",
      "contractType": "Permanent",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "html, css, bootstrap, JS, angular, node ,rxjs, ",
      "education": "Graduate",
      "reportingManager": "Parley",
      "hiringManager": "Dakota Jhonson",
      "jobDescription": "Responsible for alignemnts of web design, user experience and change wireframes into resposnsive design.",
      "rolesResponsibilities": "Develop new user-facing features, determining the structure and design of web-pages",
      "jobLocation": "Hyderabad",
      "fileUpload": "C:\\fakepath\\download (3).png",
      "id": 5
    },
    {
      "jobTitle": "UI Designer",
      "urgency": "High",
      "serviceCatalog": "catalog",
      "primary": "figma, photoshop, wireframes",
      "secondary": "Javascript, Angularjs, nodejs, rxjs",
      "designation": "Web developer",
      "organizationUnit": "Microservices",
      "gradeLevel": "Level-1",
      "functionalArea": " Bangalore",
      "team": "9",
      "client": "TILA",
      "project": "tila",
      "experience": 232,
      "vacancyCount": 343,
      "raisedFDate": "2023-01-19T18:30:00.000Z",
      "raisedTDate": "2023-01-19T18:30:00.000Z",
      "requiredDate": "2023-01-19T18:30:00.000Z",
      "contractType": "Temporary",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "html, css, bootstrap, JS, angular, node ,rxjs, ",
      "education": "Graduate",
      "reportingManager": "Parley",
      "hiringManager": "Dakota Jhonson",
      "jobDescription": "Responsible for alignemnts of web design, user experience and change wireframes into resposnsive design.",
      "rolesResponsibilities": "Develop new user-facing features, determining the structure and design of web-pages",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\download (3).png",
      "id": 6
    },
    {
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
      "id": 7
    },
    {
      "jobTitle": "CyberSecurity Developer",
      "urgency": "Medium",
      "serviceCatalog": "catalog",
      "primary": "Network & System Administration, Network security control,Cloud Security",
      "secondary": "python, cloud security, Blockchain security",
      "designation": "Senior CyberSecurity Engineer",
      "organizationUnit": "CyberSecurity",
      "gradeLevel": "Level-3",
      "functionalArea": "Bangalore",
      "team": "10",
      "client": "us",
      "project": "Security",
      "experience": 5,
      "vacancyCount": 23,
      "raisedFDate": "2023-02-08T18:30:00.000Z",
      "raisedTDate": "2023-02-27T18:30:00.000Z",
      "requiredDate": "2023-02-25T18:30:00.000Z",
      "contractType": "Permanent",
      "employmentType": "Full-Time",
      "NatureofV": "New",
      "vacancyT": "Budget",
      "skills": "",
      "education": "Graduate",
      "reportingManager": "George Washington",
      "hiringManager": "Jhonson Parley",
      "jobDescription": "Evaluating the organization's security needs and establishing best practices and standards accordingly",
      "rolesResponsibilities": "Designing, implementing, maintaining, overseeing, and upgrading all security measures",
      "jobLocation": "Bangalore",
      "fileUpload": "C:\\fakepath\\certified.png",
      "id": 8
    },
    {
      "jobTitle": "Senior Project Manager",
      "urgency": "High",
      "serviceCatalog": "66914",
      "primary": "Agile, Scrum, Problem solving",
      "secondary": "Risk management, Customer management, Conflict resolution",
      "designation": "Senior Project Manager",
      "organizationUnit": "10",
      "gradeLevel": "Level-1",
      "functionalArea": "USA",
      "team": "10",
      "client": "None",
      "project": "Something",
      "experience": 8,
      "vacancyCount": 3,
      "raisedFDate": "2023-02-08T18:30:00.000Z",
      "raisedTDate": "2023-02-27T18:30:00.000Z",
      "requiredDate": "2023-02-25T18:30:00.000Z",
      "contractType": "Permanent",
      "employmentType": "Full-Time",
      "NatureofV": "Replacement",
      "vacancyT": "Budget",
      "skills": "Quick response, Detail oriented, Flexibility, Teamwork",
      "education": "",
      "jobDescription": "Must have a solid understanding of business cases, risk management skills & strong leadership skills",
      "rolesResponsibilities": "Plan and develop the project idea, monitor project progress and manage deadlines.",
      "jobLocation": "Bangalore",
      "fileUpload": "",
      "ctcRange": "10 - 15 LPA",
      "shiftTiming": 10,
      "hiringManager": "Jhonson Parley",
      "reportingManager": "George Washington",
      "id": 9
    }
  ];

  constructor(private _CandidatesApi: CandidatesService, private router: Router,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.getFormData;
    this.getQueryParams();
    this.isRouteActive(Event);
  }

  getQueryParams() {
    this.activatedRoute.queryParams.subscribe({
      next: (res: any) => {
        this.gridRequisitionID = res;
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

  routeToJobDetails(id: any) {
    this.router.navigate([`/jobs/reqdet/${id}/jobdet`], { queryParams: { id: id } });
  }

  routeToCandidateDetails(id: any) {
    this.router.navigate([`/jobs/reqdet/${id}/perfm`], { queryParams: { id: id } });
  }

  isRouteActive(route: any) {
    return this.router.url.includes(`/${route}`);
  }

  openingDetails() {
    this.opening = false;
  }

  sendScreening(id: any, event: any) {
    this.card = event;
    this._CandidatesApi.sendScreeningData(this.card);
    this.router.navigate([`/jobs/reqdet/${id}/perfm`], { queryParams: { id: id } });
  }

  carddata(event: any) {
    this.card = event.target.textContent;
    console.log(this.card);
  }



  // highlight(index:any){
  //   this.isHighlighted = index;
  // }
  highlight(index: number) {
    this.isHighlighted = index;
  }


}

