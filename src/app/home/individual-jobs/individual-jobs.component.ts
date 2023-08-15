import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, FilterChangedEvent, GridReadyEvent, IDateFilterParams, INumberFilterParams, ITextFilterParams, RowSelectedEvent } from 'ag-grid-community';
import { RequistiondataService } from '../../Service/Requisition/requistiondata.service';

@Component({
  selector: 'app-individual-jobs',
  templateUrl: './individual-jobs.component.html',
  styleUrls: ['./individual-jobs.component.css']
})
export class IndividualJobsComponent implements OnInit {

  gridApi: any;
  gridColumnApi: any;
  jsonData: any;
  data: any;
  gridRequisitionID: any;
  filterInstance: any;

  rowData: any = [
    {
      "id": 1,
      "JobTitle": {
        "name": "Frontend Developer",
        "presenter": "Microservices"
      },
      "candidates": "7",
      "internalreview": " 3",
      "submitted": "5",
      "clientInterview": "5",
      "References": "3",
      "offers": "3",
      "interview 1": "2",
      "interview 2": "2",
      "status": "assessment"
    },
    {
      "id": 2,
      "JobTitle": {
        "name": "Backend Developer",
        "presenter": "Microservices"
      },
      "candidates": "7",
      "internalreview": "5",
      "submitted": "4",
      "clientInterview": "4",
      "References": "3",
      "offers": "4",
      "interview 1": "6",
      "interview 2": "3",
      "status": "screening"
    },
    {
      "id": 3,
      "JobTitle": {
        "name": "Frontend Developer",
        "presenter": "Microservices"
      },
      "candidates": "30",
      "internalreview": "1",
      "submitted": "8",
      "clientInterview": "2",
      "References": "3",
      "offers": "15",
      "interview 1": "7",
      "interview 2": "8",
      "status": "hr"
    },
    {
      "id": 4,
      "JobTitle": {
        "name": "Frontend Developer",
        "presenter": "Microservices"
      },
      "candidates": "22",
      "internalreview": "16",
      "submitted": "9",
      "clientInterview": "1",
      "References": "4",
      "offers": "3",
      "interview 1": "7",
      "interview 2": "6",
      "status": "interview2"
    },
    {
      "id": 5,
      "JobTitle": {
        "name": "Frontend Developer",
        "presenter": "JCOBS"
      },
      "candidates": "14",
      "internalreview": "12",
      "submitted": "12",
      "clientInterview": "3",
      "References": "2",
      "offers": "4",
      "interview 1": "8",
      "interview 2": "2",
      "status": "candidates"
    },
    {
      "id": 6,
      "JobTitle": {
        "name": "UI Designer",
        "presenter": "GE Health Care"
      },
      "candidates": "21",
      "internalreview": "5 ",
      "submitted": "7",
      "clientInterview": "9",
      "References": "2 ",
      "offers": " 4",
      "interview 1": "1",
      "interview 2": "8",
      "status": "candidates"
    },
    {
      "id": 7,
      "JobTitle": {
        "name": "Project Manager",
        "presenter": "AWS"
      },
      "candidates": "5",
      "internalreview": "12",
      "submitted": "4",
      "clientInterview": "1",
      "References": "5",
      "offers": "2",
      "interview 1": "3",
      "interview 2": "1",
      "status": "interview1"
    },
    {
      "id": 8,
      "JobTitle": {
        "name": "Cybersecurity Engineer",
        "presenter": "Azure"
      },
      "candidates": "11",
      "internalreview": "7 ",
      "submitted": "3",
      "clientInterview": "5",
      "References": "4 ",
      "offers": "7",
      "interview 1": "5",
      "interview 2": "2",
      "status": "interview2"
    },
    {
      "id": 9,
      "JobTitle": {
        "name": "Senior Project Manager",
        "presenter": "GE Transportation"
      },
      "candidates": " 5",
      "internalreview": "9",
      "submitted": "3",
      "clientInterview": "",
      "References": "",
      "offers": "",
      "interview 1": "",
      "interview 2": "",
      "status": "shortlist"
    }
  ]


  constructor(private http: HttpClient, @Inject(Router) private router: Router, private service: RequistiondataService) { }


  ngOnInit() {
    // 
  }


  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    this.rowData;
  }


  colDefs: ColDef[] = [

    {
      headerName: 'Job Title', field: 'JobTitle', resizable: true, cellRenderer: this.getui, headerClass: 'same-header', width: 150,
      cellStyle: {
        'display': 'flex ',
        'align-items': 'center ',
      },
      onCellClicked: this.onJobTitleCellClicked.bind(this)
    },
    {
      field: 'candidates', headerName: 'Candidates', headerClass: 'same-header', resizable: true, width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'candidate-class': ({ data }) => data.status === 'candidates',
      },
      onCellClicked: this.onCellClicked.bind(this),
      filter: 'agDateColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply']
      } as IDateFilterParams
    },
    {
      headerName: 'Screening ', field: "internalreview", resizable: true, headerClass: 'same-header', width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'screen-class': ({ data }) => data.status === 'screening',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "submitted", headerClass: 'same-header', resizable: true, headerName: "Shortlisted", width: 100, cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'shortlist-class': ({ data }) => data.status === 'shortlist',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "clientInterview", headerClass: 'same-header', resizable: true, headerName: "Q.Assessment", width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'aptitude-class': ({ data }) => data.status === 'aptitude',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "References", headerClass: 'same-header', resizable: true, headerName: "B.Assessment", width: 115,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'behaviour-class': ({ data }) => data.status === 'behavioural',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "offers", headerClass: 'same-header', resizable: true, headerName: "V.Assessment ", width: 120,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'assessment-class': ({ data }) => data.status === 'assessment',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },

    {
      field: "interview 1", headerClass: 'same-header', resizable: true, headerName: "Interview1", width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'int1-class': ({ data }) => data.status === 'interview1',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "interview 2", headerClass: 'same-header', resizable: true, headerName: "Interview2", width: 100, cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'int2-class': ({ data }) => data.status === 'interview2',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },

    {
      field: "offers", headerClass: 'same-header', resizable: true, headerName: "HR Interview", width: 105,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'hr-class': ({ data }) => data.status === 'hr',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
    {
      field: "offers", headerClass: 'same-header', resizable: true, headerName: "Offer", width: 80,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'hr-class': ({ data }) => data.status === 'offer',
      },
      onCellClicked: this.onCellClicked.bind(this)
    },
  ]


  getui(params: any) {
    return '<div class="show-name" style="font-size: 0.7rem; color: #3366ff; cursor: pointer;text-transform:uppercase;text-align-left">' +
      params.data.JobTitle.name +
      '' +
      '</div>' +
      '<div class="show-presenter" style="font-size:0.7rem;color:#4d4d4d;text-align:left ">' +
      params.data.JobTitle.presenter +
      '</div>';
  }


  onJobTitleCellClicked(event: any) {
    let id: any = event.data.id;
    this.router.navigate([`/jobs/reqdet/${id}/jobdet`], { queryParams: { id: id } });
  }

  onCellClicked(event: any) {
    let id: any = event.data.id;
    let steps: any = event.colDef.headerName;
    this.router.navigate([`/jobs/reqdet/${id}/perfm`], { queryParams: { id: id, name: steps } });
  }


  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }


  autoSizeAll(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column: any) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }


  // onFilterChanged(e: FilterChangedEvent) {
  //   console.log('onFilterChanged', e);
  //   console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
  // }

  // ngOnDestroy(): void {
  //   this.gridApi.setFilterModel(null);
  //   console.log('destroyed instance of filter');
  // }


}
