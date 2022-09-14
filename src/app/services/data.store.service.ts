import { Injectable } from "@angular/core";
import { action, observable } from "mobx";
import { SingleTestConfig, RollResult } from "../types/types";

const NUMBER_OF_ROLLS: number = 1000;
const INITIAL_CONFIG: SingleTestConfig = {
  testId: 0,
  attackDiceType: 10,
  attackDiceNumber: 0,
  defenseArmor: 6,
  aiming: true,
  inCover: true,
};

@Injectable({
  providedIn: "root",
})
export class DataStoreService {
  @observable configTest1: SingleTestConfig = {
    ...INITIAL_CONFIG,
    testId: 1,
    attackDiceNumber: 2,
  };
  @observable configTest2: SingleTestConfig = {
    ...INITIAL_CONFIG,
    testId: 2,
    attackDiceNumber: 3,
  };
  @observable configTest3: SingleTestConfig = {
    ...INITIAL_CONFIG,
    testId: 3,
    attackDiceNumber: 4,
  };

  @observable resultTest1: RollResult = {
    testId: 1,
    averageWounds: 0,
    chartData: [],
  };
  @observable resultTest2: RollResult = {
    testId: 1,
    averageWounds: 0,
    chartData: [],
  };
  @observable resultTest3: RollResult = {
    testId: 1,
    averageWounds: 0,
    chartData: [],
  };

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
    console.log(result);
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

  calculateSuccessPercentage(config: SingleTestConfig) {
    console.log(config);
    const avgWounds: number = config.attackDiceNumber + +config.attackDiceType;
    this.setResult({
      testId: config.testId,
      averageWounds: avgWounds,
      chartData: [],
    });
  }

  calculateAverageWounds(): number {
    return 0;
  }
}
