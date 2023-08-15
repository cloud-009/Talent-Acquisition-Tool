import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatesService } from '../Service/Candidate/candidates.service';

@Component({
  selector: 'app-searchfilter',
  templateUrl: './searchfilter.component.html',
  styleUrls: ['./searchfilter.component.css'],
})
export class SearchfilterComponent implements OnInit {

  heroes: any = [
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
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
      "screening": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "shortlisting": {
        "role": "HR",
        "person": "Suchismita",
        "serviceLevelAgreement": "Level-2"
      },
      "qualitativeAssessment": {
        "role": "Manager",
        "person": "Anuradha Pogalur",
        "serviceLevelAgreement": "Level-2"
      },
      "behaviouralAssessment": {
        "role": "Manager",
        "person": "Chary Podichett",
        "serviceLevelAgreement": "Level-2"
      },
      "videoAssessment": {
        "role": "Reporting Manager",
        "person": "Rohini Sudha",
        "serviceLevelAgreement": "Level-3"
      },
      "interview1": {
        "role": "Reporting Manager",
        "person": "Pavan Bhagi",
        "serviceLevelAgreement": "Level-1"
      },
      "interview2": {
        "role": "Manager",
        "person": "Sirisha Guntur",
        "serviceLevelAgreement": "Level-3"
      },
      "hrInterview": {
        "role": "HR",
        "person": "Sushmarao",
        "serviceLevelAgreement": "Level-1"
      },
      "documentation": {
        "role": "HR",
        "person": "Adithya Dikkala",
        "serviceLevelAgreement": "Level-3"
      },
      "offer": {
        "role": "HR",
        "person": "vinitha daggupati",
        "serviceLevelAgreement": "Level-1"
      },
      "id": 9
    }
  ];


  listDisplay: boolean = true;
  cardDisplay: boolean = false;
  isHeaderHidden: boolean = true;
  selectedvalue: string = '';
  selectedvalue1: string = '';
  selectedvalue2: any;
  selectedvalue3: any;
  selectedvalue4: any;
  filteredItems: any = [];

  constructor(private canservice: CandidatesService, private router: Router) {
  }


  ngOnInit(): void {

  }


  onbuttonclick(): void {
    if (this.selectedvalue) {
      this.filteredItems = this.heroes.filter((item: any) =>
        (!this.selectedvalue || item.jobTitle === this.selectedvalue) &&
        (!this.selectedvalue1 || item.organizationUnit === this.selectedvalue1) &&
        (!this.selectedvalue2 || item.jobLocation === this.selectedvalue2) &&
        (!this.selectedvalue3 || item.gradeLevel === this.selectedvalue3) &&
        (!this.selectedvalue4 || item.reportingManager === this.selectedvalue4))
      this.isHeaderHidden = false;
    }
  }

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
      },
    });
  }

  routeToRequisition(id: any) {
    this.router.navigate([`/jobs/reqdet/${id}`], { queryParams: { id: id } });
  }


}
