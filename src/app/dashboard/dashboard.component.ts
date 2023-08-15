import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  cities!: City[];
  selectedCity!: City;

  ngOnInit(): void {
    this.getPrimeTabComponent();
    this.getDropDown();
  }


  getPrimeTabComponent() {
    this.items = [
      { label: 'List', icon: 'pi pi-list', styleClass: 'home', routerLink: 'list' },
      { label: 'Grid', icon: 'pi pi-th-large', styleClass: 'home', routerLink: 'grid' },
      { label: 'Board', icon: 'pi pi-map', styleClass: 'home', routerLink: 'board' },
      { label: 'Calendar', icon: 'pi pi-calendar', styleClass: 'home', routerLink: 'calendar' },
      { label: 'Timeline', icon: 'pi pi-chart-bar', styleClass: 'home', routerLink: 'timeline' },
      { label: 'Table', icon: 'pi pi-table', styleClass: 'home', routerLink: 'table' },
    ];
    this.activeItem = this.items[0];
  }

  getDropDown() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
    ]
  }


}
