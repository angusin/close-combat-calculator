import { Component } from "@angular/core";
import { computed } from "mobx";
import { DataStoreService } from "./services/data.store.service";
import { SingleTestConfig } from "./types/types";

@Component({
  template: ` <div class="page-wrapper with-navbar">
    <!-- Navbar -->
    <app-header></app-header>

    <!-- Content wrapper -->
    <div class="content-wrapper" mobxAutorun>
      <div class="container-fluid mt-15">
        <div class="row">
          <div class="col-sm">
            <app-manual-test
              [config]="configTest1"
              [color]="'rgba(240, 99, 122, 1)'"
            ></app-manual-test>
          </div>
          <div class="col-sm">
            <app-manual-test
              [config]="configTest2"
              [color]="'rgba(71, 146, 228, 1)'"
            ></app-manual-test>
          </div>
          <div class="col-sm">
            <app-manual-test
              [config]="configTest3"
              [color]="'rgba(248, 204, 88, 1)'"
            ></app-manual-test>
          </div>
        </div>
        <app-graph></app-graph>
      </div>
    </div>
  </div>`,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dataStoreService: DataStoreService) {}

  @computed get configTest1(): SingleTestConfig {
    return this.dataStoreService.configTest1;
  }

  @computed get configTest2(): SingleTestConfig {
    return this.dataStoreService.configTest2;
  }

  @computed get configTest3(): SingleTestConfig {
    return this.dataStoreService.configTest3;
  }
}
