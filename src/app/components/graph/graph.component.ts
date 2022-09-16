import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { autorun, computed, Lambda, observe, reaction } from "mobx";
import { BaseChartDirective } from "ng2-charts";
import { DataStoreService } from "src/app/services/data.store.service";
import { RollResult } from "src/app/types/types";

@Component({
  template: `
    <div class="row" mobxAutorun>
      <div class="col-md-4">
        <div class="card p-0">
          <!-- Content -->
          <div class="content">
            <canvas
              baseChart
              [data]="barChartData1"
              [options]="barChartOptions1"
              [type]="lineChartType"
            >
            </canvas>
          </div>
          <!-- Card footer -->
          <div
            class="px-card py-10 bg-light-lm bg-very-dark-dm rounded-bottom d-flex justify-content-between"
          >
            <p class="font-size-24 m-0 text-bottom">
              {{ test1Results.averageWounds | number: "1.0-2" }}
              <span>average wounds.</span>
            </p>
            <p class="font-size-24 m-0 text-bottom">
              <span>Destroy in </span>
              {{ killInTurns(test1Results.averageWounds) }}
              <span>turns</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-0">
          <!-- Content -->
          <div class="content">
            <canvas
              baseChart
              [data]="barChartData2"
              [options]="barChartOptions2"
              [type]="lineChartType"
            >
            </canvas>
          </div>
          <!-- Card footer -->
          <div
            class="px-card py-10 bg-light-lm bg-very-dark-dm rounded-bottom d-flex justify-content-between"
          >
            <p class="font-size-24 m-0 text-bottom">
              {{ test2Results.averageWounds | number: "1.0-2" }}
              <span>average wounds.</span>
            </p>
            <p class="font-size-24 m-0 text-bottom">
              <span>Destroy in </span>
              {{ killInTurns(test2Results.averageWounds) }}
              <span>turns</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-0">
          <!-- Content -->
          <div class="content">
            <canvas
              baseChart
              [data]="barChartData3"
              [options]="barChartOptions3"
              [type]="lineChartType"
            >
            </canvas>
          </div>
          <!-- Card footer -->
          <div
            class="px-card py-10 bg-light-lm bg-very-dark-dm rounded-bottom d-flex justify-content-between"
          >
            <p class="font-size-24 m-0 text-bottom">
              {{ test3Results.averageWounds | number: "1.0-2" }}
              <span>average wounds.</span>
            </p>
            <p class="font-size-24 m-0 text-bottom">
              <span>Destroy in </span>
              {{ killInTurns(test3Results.averageWounds) }}
              <span>turns</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <div class="card">
          <div style="display: block">
            <canvas
              baseChart
              [data]="barChartData4"
              [options]="barChartOptions4"
              [type]="lineChartType"
            >
            </canvas>
          </div>
        </div>
      </div>
    </div>
  `,
  selector: "app-graph",
  styleUrls: ["./graph.component.scss"],
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  private currentAnnotationChangeDisposer: Lambda;
  private selectedAssetIdChangeDisposer: Lambda;

  public lineChartType: ChartType = "line";

  public barChartOptions1: ChartConfiguration["options"] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {},
      y: {
        min: 0,
        max: 80,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartOptions2: ChartConfiguration["options"] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {},
      y: {
        min: 0,
        max: 80,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartOptions3: ChartConfiguration["options"] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {},
      y: {
        min: 0,
        max: 80,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartOptions4: ChartConfiguration["options"] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public barChartData1: ChartData<"line"> = {
    labels: ["0", "1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: this.test1Results?.chartData.map((item) => item.percentage),
        label: "Attack 1",
        backgroundColor: "rgba(240, 99, 122, 0.1)",
        borderColor: "rgba(240, 99, 122, 1)",
        pointBackgroundColor: "rgba(240, 99, 122, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
    ],
  };

  public barChartData2: ChartData<"line"> = {
    labels: ["0", "1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: this.test2Results?.chartData.map((item) => item.percentage),
        label: "Attack 2",
        backgroundColor: "rgba(71, 146, 228, 0.1)",
        borderColor: "rgba(71, 146, 228, 1)",
        pointBackgroundColor: "rgba(71, 146, 228, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
    ],
  };

  public barChartData3: ChartData<"line"> = {
    labels: ["0", "1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: this.test3Results?.chartData.map((item) => item.percentage),
        label: "Attack 3",
        backgroundColor: "rgba(248, 204, 88, 0.1)",
        borderColor: "rgba(248, 204, 88, 1)",
        pointBackgroundColor: "rgba(248, 204, 88, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
    ],
  };

  public barChartData4: ChartData<"line"> = {
    labels: ["0", "1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: this.test1Results?.chartData.map((item) => item.percentage),
        label: "Attack 1",
        backgroundColor: "rgba(240, 99, 122, 0.1)",
        borderColor: "rgba(240, 99, 122, 1)",
        pointBackgroundColor: "rgba(240, 99, 122, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
      {
        data: this.test2Results?.chartData.map((item) => item.percentage),
        label: "Attack 2",
        backgroundColor: "rgba(71, 146, 228, 0.1)",
        borderColor: "rgba(71, 146, 228, 1)",
        pointBackgroundColor: "rgba(71, 146, 228, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
      {
        data: this.test3Results?.chartData.map((item) => item.percentage),
        label: "Attack 3",
        backgroundColor: "rgba(248, 204, 88, 0.1)",
        borderColor: "rgba(248, 204, 88, 1)",
        pointBackgroundColor: "rgba(248, 204, 88, 1)",
        pointHoverBackgroundColor: "#fff",
        fill: "origin",
      },
    ],
  };

  @computed get test1Results(): RollResult {
    return this.dataStoreService.resultTest1;
  }

  @computed get test2Results(): RollResult {
    return this.dataStoreService.resultTest2;
  }

  @computed get test3Results(): RollResult {
    return this.dataStoreService.resultTest3;
  }

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.updateChart();

    autorun(() => {
      console.log("autorun: ");
      this.updateChart();
    });

    this.currentAnnotationChangeDisposer = observe(
      this.dataStoreService,
      (_) => {
        this.updateChart();
      }
    );
  }

  updateChart() {
    setTimeout(() => {
      this.barChartData1.datasets[0].data = this.test1Results?.chartData.map(
        (item) => item.percentage
      );
      this.barChartData2.datasets[0].data = this.test2Results?.chartData.map(
        (item) => item.percentage
      );
      this.barChartData3.datasets[0].data = this.test3Results?.chartData.map(
        (item) => item.percentage
      );
      this.barChartData4.datasets[0].data = this.test1Results?.chartData.map(
        (item) => item.percentage
      );
      this.barChartData4.datasets[1].data = this.test2Results?.chartData.map(
        (item) => item.percentage
      );
      this.barChartData4.datasets[2].data = this.test3Results?.chartData.map(
        (item) => item.percentage
      );

      this.charts.forEach((c) => {
        c.update();
      });
    }, 300);
  }

  killInTurns(wounds: number): number {
    return Math.round(12 / wounds);
  }

  ngOnDestroy(): void {
    if (this.currentAnnotationChangeDisposer) {
      this.currentAnnotationChangeDisposer();
    }
    if (this.selectedAssetIdChangeDisposer) {
      this.selectedAssetIdChangeDisposer();
    }
  }
}
