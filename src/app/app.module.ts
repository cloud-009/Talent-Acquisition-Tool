import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { ListComponent } from './dashboard/list/list.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { BoardComponent } from './dashboard/board/board.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { TableComponent } from './dashboard/table/table.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartModule } from 'primeng/chart';
import { TablePipe } from './pipes/Table/table.pipe';
import { ScreenPipe } from './pipes/Screen/screen.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RequisitionformComponent } from './jobs/requisitionform/requisitionform.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { WorkflowComponent } from './candidate/workflow/workflow.component';
import { MatDividerModule } from '@angular/material/divider';
import { RequisitionDetailComponent } from './jobs/requisition-detail/requisition-detail.component';
import { JobDetailsComponent } from './jobs/requisition-detail/job-details/job-details.component';
import { IndividualScreenComponent } from './home/individual-screen/individual-screen.component';
import { IndividualJobsComponent } from './home/individual-jobs/individual-jobs.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { ReportsComponent } from './reports/reports.component';
import { CardComponent } from './reports/card/card.component';
import { ChartComponent } from './reports/chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SearchPipe } from './pipes/Search/search.pipe';
import { AlljobsComponent } from './jobs/alljobs/alljobs.component';
import { OpeningsComponent } from './jobs/requisition-detail/openings/openings.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CandidatesComponent } from './candidate/candidates/candidates.component';
import { MytempComponent } from './jobs/requisitionform/mytemp/mytemp.component';
import { LoginComponent } from './login/login.component';
import { CandidateFormComponent } from './candidate/candidate-form/candidate-form.component';
import { AlltempComponent } from './jobs/requisitionform/alltemp/alltemp.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgChartsModule } from 'ng2-charts';
import { ReferalComponent } from './home/referal/referal.component';
import { DatePipe } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PopupComponent } from './home/popup/popup.component';
import { JobsComponent } from './jobs/jobs.component';
import { CandidateComponent } from './candidate/candidate.component';
import { PerformanceComponent } from './jobs/requisition-detail/performance/performance.component';




@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    ListComponent,
    GridComponent,
    BoardComponent,
    CalendarComponent,
    TimelineComponent,
    TableComponent,
    TablePipe,
    RequisitionformComponent,
    WorkflowComponent,
    RequisitionDetailComponent,
    JobDetailsComponent,
    SearchfilterComponent,
    ReportsComponent,
    CardComponent,
    ChartComponent,
    IndividualScreenComponent,
    IndividualJobsComponent,
    SearchfilterComponent,
    CandidatesComponent,
    SearchPipe,
    AlljobsComponent,
    OpeningsComponent,
    MytempComponent,
    AlltempComponent,
    OpeningsComponent,
    LoginComponent,
    ReferalComponent,
    PopupComponent,
    CandidateFormComponent,
    ScreenPipe,
    JobsComponent,
    CandidateComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    DropdownModule,
    CardModule,
    NgxPaginationModule,
    ChartModule,
    Ng2SearchPipeModule,
    MatCardModule,
    HttpClientModule,
    AgGridModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatMenuModule,
    NgApexchartsModule,
    MatCheckboxModule,
    NgApexchartsModule,
    MatIconModule,
    RoundProgressModule,
    DialogModule,
    ButtonModule,
    NgChartsModule,
    FullCalendarModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
