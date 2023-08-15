import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, ColumnResizedEvent, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.css']
})
export class ReferalComponent {
  gridApi: any;
  gridColumnApi: any;

  rowData: any = [
    {
      "JobTitle": {
        "name": "Parul Bhatia",
        "presenter": "Senior Developer"
      },
      "screening": "Done",
      "shortlist": "Done",
      "submitted": "Done",
      "aptitude": "Done",
      "behavioural": "Done",
      "assessment": "Running",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "assessment"
    },
    {
      "JobTitle": {
        "name": "Dakota Jhonson",
        "presenter": "Cyber Security Developer"
      },
      "screening": "Done",
      "shortlist": " Running",
      "submitted": "",
      "aptitude": "",
      "behavioural": "",
      "assessment": "",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "shortlist"
    },
    {
      "JobTitle": {
        "name": "Muhammad Ali",
        "presenter": "Junior Frontend Engineer"
      },
      "screening": "Done",
      "shortlist": " Done",
      "submitted": "Done",
      "aptitude": "Running",
      "behavioural": "",
      "assessment": "",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "aptitude"
    },
    {
      "JobTitle": {
        "name": "Davy Jones",
        "presenter": "AWS Developer"
      },
      "screening": "",
      "shortlist": " ",
      "submitted": "",
      "aptitude": "",
      "behavioural": "",
      "assessment": "",
      "interview1": "",
      "interview2": "Running",
      "hr": "",
      "status": "interview2"
    },
    {
      "JobTitle": {
        "name": "Emilia Clarke",
        "presenter": "Senior Developer"
      },
      "screening": "Done",
      "shortlist": " Done",
      "submitted": "Done",
      "aptitude": "Done",
      "behavioural": "Done",
      "assessment": "Done",
      "interview1": "Done",
      "interview2": "Done",
      "hr": "Done",
      "offer": "Done",
      "status": "offer"
    },
    {
      "JobTitle": {
        "name": "Parul Bhatia",
        "presenter": "Senior Developer"
      },
      "screening": "Done",
      "shortlist": "Done",
      "submitted": "Done",
      "aptitude": "Done",
      "behavioural": "Done",
      "assessment": "Running",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "assessment"
    },
    {
      "JobTitle": {
        "name": "Dakota Jhonson",
        "presenter": "Cyber Security Developer"
      },
      "screening": "Done",
      "shortlist": " Running",
      "submitted": "",
      "aptitude": "",
      "behavioural": "",
      "assessment": "",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "shortlist"
    },
    {
      "JobTitle": {
        "name": "Muhammad Ali",
        "presenter": "Junior Frontend Engineer"
      },
      "screening": "Done",
      "shortlist": " Done",
      "submitted": "Done",
      "aptitude": "Done",
      "behavioural": "Done",
      "assessment": "Done",
      "interview1": "Done",
      "interview2": "Done",
      "hr": "Running",
      "status": "hr"
    },
    {
      "JobTitle": {
        "name": "Davy Jones",
        "presenter": "AWS Developer"
      },
      "screening": "",
      "shortlist": " ",
      "submitted": "",
      "aptitude": "",
      "behavioural": "",
      "assessment": "",
      "interview1": "",
      "interview2": "Running",
      "hr": "",
      "status": "interview2"
    },
    {
      "JobTitle": {
        "name": "Emilia Clarke",
        "presenter": "Senior Developer"
      },
      "screening": "Done",
      "shortlist": " Done",
      "submitted": "Done",
      "aptitude": "Done",
      "behavioural": "Done",
      "assessment": "Running",
      "interview1": "",
      "interview2": "",
      "hr": "",
      "status": "assessment"
    }
  ]


  constructor(private http: HttpClient, @Inject(Router) private router: Router) { }


  onGridReady(params: GridReadyEvent<any>) {
    this.rowData;
  }


  colDefs: ColDef[] = [

    {
      headerName: 'Candidate Name', field: 'JobTitle', resizable: true, cellRenderer: this.getui, headerClass: 'same-header', width: 150,
      cellStyle: {
        'display': 'flex ',
        'align-items': 'center ',
      },
      onCellClicked: this.routerNavigate.bind(this)
    },
    {
      headerName: 'Screening ', field: "screening", resizable: true, headerClass: 'same-header', width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'screening',
      }
    },
    {
      field: "shortlist", headerClass: 'same-header', resizable: true, headerName: "Shortlisted", width: 110, cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'shortlist',
      }
    },
    {
      field: "aptitude", headerClass: 'same-header', resizable: true, headerName: "Qualitative Assessment", width: 130,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'aptitude',
      }
    },
    {
      field: "behavioural", headerClass: 'same-header', resizable: true, headerName: "Behavioural Assessment", width: 120,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'behavioural',
      }
    },
    {
      field: "assessment", headerClass: 'same-header', resizable: true, headerName: "Video Assessment", width: 120,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'assessment',
      }
    },

    {
      field: "interview1", headerClass: 'same-header', resizable: true, headerName: "Interview 1", width: 100,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'interview1',
      }
    },
    {
      field: "interview2", headerClass: 'same-header', resizable: true, headerName: "Interview 2", width: 100, cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'interview2',
      }
    },

    {
      field: "hr", headerClass: 'same-header', resizable: true, headerName: "HR Interview", width: 115,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'hr',
      }
    },
    {
      field: "offer", headerClass: 'same-header', resizable: true, headerName: "Offer", width: 105,
      cellStyle: {
        'display': 'flex ',
        'justify-content': 'center',
        'align-items': 'center ',
      },
      cellClassRules: {
        'status-class': ({ data }) => data.status === 'offer',
      }
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


  routerNavigate(event: any) {
    let id: any = event.data.id;
    this.router.navigate([`/candidate/workflow/${id}`], { queryParams: { id: id } });
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }


  onColumnResized(params: ColumnResizedEvent) {
    console.log(params);
  }


  autoSizeAll(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column: any) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

}
