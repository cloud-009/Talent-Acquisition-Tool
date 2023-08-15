import { Component } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  searchString: string = '';
  fileName = 'TableSheet.xlsx';

  users = [
    { jobId: 'PN8915', jobTitle: 'UI Desginer', hiringManager: 'Jane Doe', description: 'To be the best designer in the wokrspace', datePosted: 'September 20, 2022', tag: 'Progress' },
    { jobId: 'PJ9981', jobTitle: 'Frontend Developer', hiringManager: 'Jack Sparrow', description: 'Design the best suited frontend for the clients', datePosted: 'November 3, 2022', tag: 'Complete' },
    { jobId: 'PF8959', jobTitle: 'FullStack Developer', hiringManager: 'Davy Jones', description: 'Be able to handle the frontend and backend to develop the application', datePosted: 'September 13, 2022', tag: 'Hired' },
    { jobId: 'RF9986', jobTitle: 'Java Developer', hiringManager: 'Jane Doe', description: 'Responsible for developing the application and softwares.', datePosted: 'December 14, 2022', tag: 'Rejected' },
    { jobId: 'PJ9981', jobTitle: 'UI Desginer', hiringManager: 'Jane Doe', description: 'To be the best designer in the wokrspace', datePosted: 'September 20, 2022', tag: 'Progress' },
    { jobId: 'PN8915', jobTitle: 'Frontend Developer', hiringManager: 'Jack Sparrow', description: 'Design the best suited frontend for the clients', datePosted: 'November 3, 2022', tag: 'Rejected' },
    { jobId: 'PN8915', jobTitle: 'FullStack Developer', hiringManager: 'Davy Jones', description: 'Be able to handle the frontend and backend to develop the application', datePosted: 'September 13, 2022', tag: 'Complete' },
    { jobId: 'PJ9981', jobTitle: 'Java Developer', hiringManager: 'Jane Doe', description: 'Responsible for developing the application and softwares.', datePosted: 'December 14, 2022', tag: 'Complete' },
    { jobId: 'PN8915', jobTitle: 'UI Desginer', hiringManager: 'Jane Doe', description: 'To be the best designer in the wokrspace', datePosted: 'September 20, 2022', tag: 'Hired' },
    { jobId: 'PF8959', jobTitle: 'Frontend Developer', hiringManager: 'Jack Sparrow', description: 'Design the best suited frontend for the clients', datePosted: 'November 3, 2022', tag: 'Hired' },
    { jobId: 'RN9234', jobTitle: 'FullStack Developer', hiringManager: 'Davy Jones', description: 'Be able to handle the frontend and backend to develop the application', datePosted: 'September 13, 2022', tag: 'Hired' },
    { jobId: 'PF8959', jobTitle: 'Java Developer', hiringManager: 'Jane Doe', description: 'Responsible for developing the application and softwares.', datePosted: 'December 14, 2022', tag: 'Complete' },
    { jobId: 'PJ9981', jobTitle: 'UI Desginer', hiringManager: 'Jane Doe', description: 'To be the best designer in the wokrspace', datePosted: 'September 20, 2022', tag: 'Hired' },
    { jobId: 'PF8959', jobTitle: 'Frontend Developer', hiringManager: 'Jack Sparrow', description: 'Design the best suited frontend for the clients', datePosted: 'November 3, 2022', tag: 'Rejected' },
    { jobId: 'PN8915', jobTitle: 'FullStack Developer', hiringManager: 'Davy Jones', description: 'Be able to handle the frontend and backend to develop the application', datePosted: 'September 13, 2022', tag: 'Hired' },
    { jobId: 'PF8959', jobTitle: 'Java Developer', hiringManager: 'Jane Doe', description: 'Responsible for developing the application and softwares.', datePosted: 'December 14, 2022', tag: 'Progress' },
    { jobId: 'PJ9981', jobTitle: 'UI Desginer', hiringManager: 'Jane Doe', description: 'To be the best designer in the wokrspace', datePosted: 'September 20, 2022', tag: 'Rejected' },
    { jobId: 'PF8959', jobTitle: 'Frontend Developer', hiringManager: 'Jack Sparrow', description: 'Design the best suited frontend for the clients', datePosted: 'November 3, 2022', tag: 'Progress' },
    { jobId: 'PN8915', jobTitle: 'FullStack Developer', hiringManager: 'Davy Jones', description: 'Be able to handle the frontend and backend to develop the application', datePosted: 'September 13, 2022', tag: 'Hired' },
    { jobId: 'PJ9981', jobTitle: 'Java Developer', hiringManager: 'Jane Doe', description: 'Responsible for developing the application and softwares.', datePosted: 'December 14, 2022', tag: 'Rejected' },
  ];
  p = 1;


  exportTableToExcel() {
    let tableElement = document.getElementById('export-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'TableSheet');
    XLSX.writeFile(wb, this.fileName);
  }

}
