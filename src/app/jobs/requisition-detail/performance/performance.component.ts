import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatesService } from 'src/app/Service/Candidate/candidates.service';
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  count = 0;
  screeningData: any;
  p = 1;
  searchText: string = '';
  status: any;

  candidatesData: any = [
    {
      "id": 1,
      "jobId": "R58991",
      "fname": "Parul ",
      "lname": "Bhatia",
      "location": "Hyderabad",
      "status": "Screening",
      "role": "Frontend Developer",
      "manager_name": "Tony D Maria",
      "experience": "3 years",
      "recommendation": "None",
      "currentLocation": "Bangalore",
      "preferredLocation": "Hyderabad",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id": 2,
      "jobId": "R58992",
      "fname": "Davy",
      "lname": "Jones",
      "location": "Banglaore",
      "status": "Screening",
      "role": "Backend Developer",
      "manager_name": "Stuart Binny",
      "experience": "5 years",
      "recommendation": "Bella Adams",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id": 3,
      "jobId": "G58981",
      "fname": "Pilan",
      "lname": "Santr",
      "location": "Mumbai",
      "status": "Shortlisting",
      "role": "PowerBI Developer",
      "manager_name": "Dan Christian",
      "experience": "4.5 years",
      "recommendation": "Dominic Allan",
      "currentLocation": "Delhi",
      "preferredLocation": "Delhi",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id": 4,
      "jobId": "M58661",
      "fname": "Adamn",
      "lname": "Smith",
      "location": "Banglaore",
      "status": "Q.Assessment",
      "role": "Frontend Developer",
      "manager_name": "Tony D Maria",
      "experience": "3 years",
      "recommendation": "Harry Styles",
      "currentLocation": "Wales",
      "preferredLocation": "Wales",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
      "id": 5,
      "jobId": "N58991",
      "fname": "Harry",
      "lname": "Milan",
      "location": "Banglaore",
      "status": "B.Assessment",
      "role": "Flutter Developer",
      "manager_name": "Tony D Maria",
      "experience": "2.5 years",
      "recommendation": "None",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
      "id": 6,
      "jobId": "R58665",
      "fname": "John",
      "lname": "Rhodes",
      "location": "Banglaore",
      "status": "V.Assessment",
      "role": "Data Analyst",
      "manager_name": "Tony D Maria",
      "experience": "4 years",
      "recommendation": "Bella Adams",
      "currentLocation": "Delhi",
      "preferredLocation": "Delhi",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
      "id": 7,
      "jobId": "M58991",
      "fname": "Tom",
      "lname": "Curran",
      "location": "Noida",
      "status": "Screening",
      "role": "Frontend Developer",
      "manager_name": "Tony D Maria",
      "experience": "6 years",
      "recommendation": "None",
      "currentLocation": "Bangalore",
      "preferredLocation": "Pune",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
      "id": 8,
      "jobId": "R58991",
      "fname": "Parul ",
      "lname": "Bhatia",
      "location": "Hyderabad",
      "status": "Interview1",
      "role": "Frontend Developer",
      "manager_name": "Tony D Maria",
      "experience": "5.4 years",
      "recommendation": "Bella Adams",
      "currentLocation": "Bangalore",
      "preferredLocation": "Hyderabad",
      "manager_role": "Hiring manager",
      "img": "../assets/profile-pic.png"
    },
    {
      "id": 9,
      "jobId": "R58992",
      "fname": "Davy",
      "lname": "Jones",
      "location": "Banglaore",
      "status": "Interview1",
      "role": "Backend Developer",
      "manager_name": "Stuart Binny",
      "experience": "3.2 years",
      "recommendation": "Bella Adams",
      "currentLocation": "Pune",
      "preferredLocation": "Bangalore",
      "manager_role": "Hiring manager",
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
  ]

  constructor(public canservice: CandidatesService, private router: Router) { }

  ngOnInit(): void {
    this.getCandidateData();
    this.getFilteredTextContent();
  }

  getFilteredTextContent() {
    this.canservice.data$.subscribe({
      next: (res: any) => {
        this.screeningData = res;
        this.searchText = this.screeningData;
        this.p = 1;
        console.log(this.screeningData);
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

  getCandidateData() {
    this.candidatesData;
  }

  routeToWorkflow(id: any) {
    this.router.navigate([`/candidate/workflow/${id}`], { queryParams: { id: id } });
  }



}
