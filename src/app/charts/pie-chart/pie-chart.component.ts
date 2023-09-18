import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public chart: any;
  @Input() data!: number[]
  @Input() labels!: string[]
  @Input() title!: string
  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 2000);

  }
  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {

        labels: this.labels,
        datasets: [{
          data: this.data,
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: this.title
          }
        }
      }

    });
  }
}
