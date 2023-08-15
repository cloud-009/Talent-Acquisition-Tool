import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidate/candidates/candidates.component';
import { BoardComponent } from './dashboard/board/board.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { ListComponent } from './dashboard/list/list.component';
import { TableComponent } from './dashboard/table/table.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { IndividualJobsComponent } from './home/individual-jobs/individual-jobs.component';
import { IndividualScreenComponent } from './home/individual-screen/individual-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './reports/chart/chart.component';
import { JobDetailsComponent } from './jobs/requisition-detail/job-details/job-details.component';
import { OpeningsComponent } from './jobs/requisition-detail/openings/openings.component';
import { RequisitionDetailComponent } from './jobs/requisition-detail/requisition-detail.component';
import { AlljobsComponent } from './jobs/alljobs/alljobs.component';
import { RequisitionformComponent } from './jobs/requisitionform/requisitionform.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { WorkflowComponent } from './candidate/workflow/workflow.component';
import { MytempComponent } from './jobs/requisitionform/mytemp/mytemp.component';
import { LoginComponent } from './login/login.component';
import { CandidateFormComponent } from './candidate/candidate-form/candidate-form.component';
import { ReferalComponent } from './home/referal/referal.component';
import { JobsComponent } from './jobs/jobs.component';
import { AlltempComponent } from './jobs/requisitionform/alltemp/alltemp.component';
import { PerformanceComponent } from './jobs/requisition-detail/performance/performance.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavbarComponent, children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent, children: [
          { path: '', redirectTo: 'individual', pathMatch: 'full' },
          { path: 'individual', component: IndividualScreenComponent },
          { path: 'myjob', component: IndividualJobsComponent },
          { path: 'referal', component: ReferalComponent }
        ]
      },

      {
        path: 'jobs', component: JobsComponent, children: [
          { path: '', redirectTo: 'alljobs', pathMatch: 'full' },
          { path: 'alljobs', component: AlljobsComponent },
          {
            path: 'requisitionform', component: RequisitionformComponent, children: [
              { path: 'alltemplates', component: AlltempComponent },
              { path: 'mytemplates', component: MytempComponent },
            ]
          },
          {
            path: 'reqdet/:id', component: RequisitionDetailComponent, children: [
              { path: '', redirectTo: 'jobdet', pathMatch: "full" },
              { path: 'jobdet', component: JobDetailsComponent },
              { path: 'perfm', component: PerformanceComponent },
              { path: 'opening', component: OpeningsComponent }
            ]
          },
        ]
      },

      {
        path: 'dashboard', component: DashboardComponent, children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListComponent },
          { path: 'board', component: BoardComponent },
          { path: 'grid', component: GridComponent },
          { path: 'calendar', component: CalendarComponent },
          { path: 'timeline', component: TimelineComponent },
          { path: 'table', component: TableComponent },
        ]
      },

      {
        path: 'candidate', component: CandidateComponent, children: [
          { path: '', redirectTo: 'allcandidates', pathMatch: 'full' },
          { path: 'allcandidates', component: CandidatesComponent },
          { path: 'candidateform', component: CandidateFormComponent },
          { path: 'workflow/:id', component: WorkflowComponent }
        ]
      },
      { path: 'search', component: SearchfilterComponent, },
      
      { path: 'reports', component: ChartComponent },

    ]
  },
]

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
export class AppRoutingModule { }
