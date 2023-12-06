import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Notebook',
        'Monitor',
        'Cadeira Game',        
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
      series: [
        {          
          type: "bar",
          showInLegend: false,         
          data: [
            {
              name: 'ACER',
              y: 41.0,
              color: '#044342',
            },
            {
              name: 'AOC',
              y: 30.0,
              color: '#7e0505',
            },
            {
              name: 'Gamer X',
              y: 29.0,
              color: '#ed9e20',
            },
          ]
        },       
      ],
      credits: {
        enabled: false
      }

    });

  constructor() { }

  ngOnInit(): void {
  }

}
