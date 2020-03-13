import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  highcharts = Highcharts;
  chartOptions1 = {
    chart: {
      type: "line"
    },
    title: {
      text: "Trend Chart"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Counts"
      }
    },
    series: [
      {
        name: 'Department',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 96]
      },
      {
        name: 'Designator',
        data: [2, 8, 57, 113, 170, 220, 248, 241, 201, 141, 86, 25]
      },
    ]
  };

  chartOptions2 = {
    chart: {
      type: "column"
    },
    title: {
      text: "Chart 2"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Counts"
      }
    },
    series: [
      {
        name: 'New York',
        data: [22, 8, 57, 113, 170, 220, 248, 241, 201, 141, 86, 25]
      },
    ]
  };

  chartOptions3 = {
    chart: {
      type: "column"
    },
    title: {
      text: "Chart 3"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Counts"
      }
    },
    series: [
      {
        name: 'Tokyo',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 96]
      },
    ]
  };

}
