import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppconfigService } from '../../../service/appconfig.service';
import { AppConfig } from '../../../domain/appconfig';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    providers: [MessageService, ChartModule]
})
export class CalendarComponent implements OnInit {
    basicData: any;
    multiAxisData: any;
    multiAxisOptions: any;
    lineStylesData: any;
    basicOptions: any;
    subscription!: Subscription;
    config!: AppConfig;
    value:any;
    dynamicLabel: string = "initial text";
    lineChartData: any;
    selectedStatus: any;
    

    constructor(
        private messageService: MessageService,
        private configService: AppconfigService) { }
    ngOnInit() {
        this.dynamicLabel = "Label Text After Initialization";
        this.lineChartData = {

            labels: ['23 Jan', '1 Feb', '15 Feb', '29 Feb', '13 March', '27 April ', '30 April', '5 May', '31 May', '5 Jun', '28 Jun', '1 July'],
            datasets: [
                {
                    label: 'Selected',
                    data: [28, 27, 26, 28, 29, 31, 26, 27, 26, 28, 30, 29],
                    fill: false,
                    borderColor: 'green',
                    tension: 0.4,
                    backgroundColor: 'rgba(0, 128, 0, 0.4)',
                    borderWidth: 1,
                    pointRadius: 6,
                    pointBackgroundColor: function(context:any) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value >= 26 ? 'green' :
                               value >= 23 ? 'orange' :
                               'red';
                    }
                },
                {
                    label: 'Rejected',
                    data: [20, 21, 18, 19, 22, 21, 22, 18, 17, 19, 20, 21],
                    fill: false,
                    borderColor: 'red',
                    tension: 0.4,
                    backgroundColor: 'rgba(255, 0, 0, 0.4)',
                    borderWidth: 1,
                    pointRadius: 6,
                    pointBackgroundColor: 'red'
                },
                {
                    label: 'In Progress',
                    data: [24, 23, 25, 24, 23, 25, 23, 24, 25, 26, 23, 24],
                    fill: false,
                    borderColor: 'orange',
                    tension: 0.4,
                    backgroundColor: 'rgba(255, 165, 0, 0.4)',
                    borderWidth: 1,
                    pointRadius: 6,
                    pointBackgroundColor: 'orange'
                },
            ],
            // options: {
            //     tooltips: {
            //         callbacks: {
            //             label: (tooltipItem: { datasetIndex: number; yLabel: number; }, data: { datasets: { label: string; data: number[]; }[]; }) => {
            //                 var value = tooltipItem.yLabel;
            //                 this.updateLabel(value);
            //                 return this.dynamicLabel;
            //             }
            //         }
            //     }
            // }       
        };
        
        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe((config: any) => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    // updateLabel(value: number) {
    //     // do something with value and update dynamicLabel
    //     this.dynamicLabel = `${value} units`;
    //   }

    updateChartOptions() {
        if (this.config.dark) this.applyDarkTheme();
        else this.applyLightTheme();
    }

    applyLightTheme() {
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
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
                    },
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

        this.multiAxisOptions = {
            stacked: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
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
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    applyDarkTheme() {
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                y: {
                    ticks: {
                        color: 'black'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };

        this.multiAxisOptions = {
            stacked: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    // updateLabel(value: any) {
    //     this.dynamicLabel = value >= 26 ? 'Selected' : value >= 23 ? 'In Progress' : 'Rejected';
    //   }
    
    // handleDataSelect(event:any) {
    //     if(this.value >= 26)
    //     {
    //     event.lineStylesData.label = "Selected";
    //     }
    //     else if(this.value >= 23){
    //         event.lineStylesData.label = "In Progress";
    //     }
    //     else {
    //         event.lineStylesData.label = "Rejected";
    //     }
    // }
    // updateLineChart(status:any) {
    //     if (status === "Selected" && this.value.datasets[0] >= 26) {
    //     this.lineChartData.datasets[0].data.label = "Selected";
    //     } else if (status === "In Progress" && this.value.datasets[2] >= 23) {
    //     this.lineChartData.datasets[0].data.label = "In Progress";
    //     } else if (status === "Rejected") {
    //     this.lineChartData.datasets[0].data.label = "Rejected";
    //     }
    //     }
    
}