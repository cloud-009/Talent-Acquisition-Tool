import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatesService } from '../../Service/Candidate/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  jsonData: any = [
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCandidatesData();
  }

  getCandidatesData() {
    this.jsonData;
  }

  workflowCandidate(id: any) {
    this.router.navigate([`/candidate/workflow/${id}`], { queryParams: { id: id } });
  }

}
