import { Component } from "@angular/core";
import { computed } from "mobx";
import { DataStoreService } from "./services/data.store.service";
import { SingleTestConfig } from "./types/types";

const INITIAL_CONFIG: SingleTestConfig = {
  testId: 0,
  attackDiceType: 10,
  attackDiceNumber: 0,
  defenseArmor: 6,
  aiming: true,
  inCover: true,
};

@Component({
  template: ` <div class="page-wrapper with-navbar">
    <!-- Navbar (immediate child of the page wrapper) -->
    <app-header></app-header>

    <!-- Content wrapper -->
    <div class="content-wrapper" mobxAutorun>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <app-manual-test
              [config]="initialConfigTest1"
              [color]="'rgba(248, 204, 88, 1)'"
            ></app-manual-test>
          </div>
          <div class="col-sm">
            <app-manual-test
              [config]="initialConfigTest2"
              [color]="'rgba(240, 99, 122, 1)'"
            ></app-manual-test>
          </div>
          <div class="col-sm">
            <app-manual-test
              [config]="initialConfigTest3"
              [color]="'rgba(71, 146, 228, 1)'"
            ></app-manual-test>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">First column</div>
          <div class="col-sm">Second column</div>
          <div class="col-sm">Third column</div>
        </div>
        <div class="row">First column</div>
      </div>
    </div>
  </div>`,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dataStoreService: DataStoreService) {}

  initialConfigTest1 = { ...INITIAL_CONFIG, testId: 1, attackDiceNumber: 2 };
  initialConfigTest2 = { ...INITIAL_CONFIG, testId: 2, attackDiceNumber: 3 };
  initialConfigTest3 = { ...INITIAL_CONFIG, testId: 3, attackDiceNumber: 4 };

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
