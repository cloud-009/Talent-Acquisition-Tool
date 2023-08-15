import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';
import { AppConfig } from 'src/domain/appconfig';


export type ChartOptions = {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
};
Chart.register(...registerables)
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    updateChartOptions: any;
    subscription: any;
    configService: any;
    basicData: any;
    stackedOptions: any;
    config!: AppConfig;
    getApexBarChartOptions: any;
    basicOptions: any;
    data: any
    chartOptions: any;
    stackedData: any;
    horizontalOptions: any
    horizontalData: any
    constructor() {
    }
    


    ngOnInit() {

        this.stackedData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#003f5c',
                data: [
                    50,
                    25,
                    12,
                    48,
                    90,
                    76,
                    42
                ]
            }, {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#58508d',
                data: [
                    21,
                    84,
                    24,
                    75,
                    37,
                    65,
                    34
                ]
            }, {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#bc5090',
                data: [
                    41,
                    52,
                    24,
                    74,
                    23,
                    21,
                    32
                ]
            }]
        };

        this.stackedOptions = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#003f5c",
                        "#58508d ",
                        "#ff6361"
                    ],
                    hoverBackgroundColor: [
                        "#003f5c",
                        "#58508d ",
                        "#ff6361"
                    ]
                }
            ]
        };
        this.horizontalOptions = {
            indexAxis: 'y',
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',

                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#003f5c',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#bc5090',
                    tension: .4
                }
            ]
        };
        this.horizontalData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#58508d',
                data: [
                    50,
                    25,
                    12,
                    48,
                    90,
                    76,
                    42
                ]
            }, {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#ff6361',
                data: [
                    21,
                    84,
                    24,
                    75,
                    37,
                    65,
                    34
                ]


            }
            ]
        };

        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe((config: AppConfig) => {
            this.config = config;
            this.updateChartOptions();
        });
    }



}


