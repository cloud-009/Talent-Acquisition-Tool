import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequistiondataService } from 'src/app/Service/Requisition/requistiondata.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  statusOfRequisition: any = [];
  jobCount: any = [];


  jsonData: any = [
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

  constructor(private service: RequistiondataService, private router: Router) { }

  ngOnInit(): void {
    this.getRequisition();
  }

  getRequisition() {
    this.jsonData.forEach((data: any) => {
      this.jobCount[data.jobTitle] = this.getRequisitionCount(data.jobTitle);
      let current: any = new Date();
      let fromDate: any = new Date(data.raisedFDate);
      let toDate: any = new Date(data.raisedTDate);
      let diffFromDate = Math.abs(current.getTime() - fromDate.getTime());
      let differenceFromDays = Math.ceil(diffFromDate / (1000 * 60 * 60 * 24));
      let diffToDate = Math.abs(current.getTime() - toDate.getTime());
      let differenceToDays = Math.ceil(diffToDate / (1000 * 60 * 60 * 24));
      let statusOfRequisition;
      if (differenceToDays <= 5) {
        statusOfRequisition = 'Poor';
      }
      else if (differenceToDays <= 10) {
        statusOfRequisition = 'Average';
      }
      else {
        statusOfRequisition = 'Good';
      }
      let jsonObject = { data: data, status: statusOfRequisition, days: differenceFromDays };
      this.statusOfRequisition.push(jsonObject);
    })
  }


  getRequisitionCount(name: string) {
    let filteredCount = this.jsonData.filter((req: any) => req.jobTitle === name);
    return filteredCount.length;
  }

  routeToDetails(id: any) {
    this.router.navigate([`jobs/reqdet/${id}/jobdet`], { queryParams: { id: id } });
  }

}
