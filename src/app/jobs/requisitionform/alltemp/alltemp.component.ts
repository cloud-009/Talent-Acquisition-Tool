import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RequistiondataService } from '../../../Service/Requisition/requistiondata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alltemp',
  templateUrl: './alltemp.component.html',
  styleUrls: ['./alltemp.component.css']
})
export class AlltempComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  results:any;
  postFormData: any;
 constructor(private service:RequistiondataService, private activate:ActivatedRoute) {
  
 }
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
    
  },
  {
    "name": "Cybersecurity Developer",
    "presenter": "Azure",
    "candidates": "11",
    "internalreview": "7 ",
    "submitted": "3",
    "clientInterview": "5",
    "References": "4 ",
    "offers": "7",
    "interview 1": "5",
    "interview 2": "2",
    "status": "interview2",
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
  },
  {
    "name": "UI Designer",
    "presenter": "GE Health Care",
    "candidates": "21",
    "internalreview": "5 ",
    "submitted": "7",
    "clientInterview": "9",
    "References": "2 ",
    "offers": " 4",
    "interview 1": "1",
    "interview 2": "8",
    "status": "candidates",
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
  },
  {
    "name": "Frontend Developer",
    "presenter": "Microservices",
    "candidates": "14",
    "internalreview": "12",
    "submitted": "12",
    "clientInterview": "3",
    "References": "2",
    "offers": "4",
    "interview 1": "8",
    "interview 2": "2",
    "status": "candidates",
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
  }
 ];


 ngOnInit(): void {
console.log(this.activate.snapshot.params)
    

this.getAllData()
// this.editFormData(this.postFormData)
 }
 getAllData() {
  this.service.getFormData().subscribe((res) => {
    this.results = res

  })
}
reqFormData() {
  console.log(this.postFormData.value);
  this.service.postFormData(this.postFormData.value).subscribe
    ({
      next: (res) => {
        console.log(res);
        this.postFormData.reset()
        this.getAllData()

      }, error: (err) => {
        console.log(err);
      }
    })

}

edit(data:any){
console.log(data);
this.service.sendFormData(data);
this.getAllData();



}


 
}
