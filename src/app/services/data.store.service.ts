import { Injectable } from "@angular/core";
import { action, observable } from "mobx";
import { SingleTestConfig, RollResult } from "../types/types";

const NUMBER_OF_ROLLS: number = 1000;

@Injectable({
  providedIn: "root",
})
export class DataStoreService {
  @observable configTest1: SingleTestConfig;
  @observable configTest2: SingleTestConfig;
  @observable configTest3: SingleTestConfig;

  @observable resultTest1: RollResult;
  @observable resultTest2: RollResult;
  @observable resultTest3: RollResult;

  @action setConfig(config: SingleTestConfig) {
    switch (config.testId) {
      case 1:
        this.configTest1 = config;
        break;
      case 2:
        this.configTest2 = config;
        break;
      case 3:
        this.configTest3 = config;
        break;
      default:
        break;
    }
  }

  @action setResult(result: RollResult) {
    switch (result.testId) {
      case 1:
        this.resultTest1 = result;
        break;
      case 2:
        this.resultTest2 = result;
        break;
      case 3:
        this.resultTest3 = result;
        break;
      default:
        break;
    }
  }

  constructor() {}

  calculateSuccessPercentage(config: SingleTestConfig) {}

  calculateAverageWounds(): number {
    return 0;
  }
}
