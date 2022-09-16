import { Injectable } from "@angular/core";
import { action, makeAutoObservable, observable } from "mobx";
import { SingleTestConfig, RollResult, SingleValue } from "../types/types";

const NUMBER_OF_ROLLS: number = 100000;
const INITIAL_CONFIG: SingleTestConfig = {
  testId: 0,
  attackDiceType: 10,
  attackDiceNumber: 0,
  defenseArmor: 6,
  aiming: false,
  inCover: false,
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
    attackDiceNumber: 4,
  };
  @observable configTest3: SingleTestConfig = {
    ...INITIAL_CONFIG,
    testId: 3,
    attackDiceNumber: 6,
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

  constructor() {
    // For mobx to autodetect the changes in the results
    makeAutoObservable(this);
  }

  calculateSuccessPercentage(config: SingleTestConfig) {
    const singleValuesPerc: SingleValue[] = [];
    let avgWounds: number = 0;
    let avgWoundsTotal: number[] = [];
    let totalSuccesses: number = 0;

    if (config.aiming) {
      config.attackDiceType = config.attackDiceType + 2;
    }

    if (config.inCover) {
      config.attackDiceType = config.attackDiceType - 2;
    }

    for (let i = 0; i < NUMBER_OF_ROLLS; i++) {
      let currentRollResult: number = 0;
      let successesInOneAttack: number = 0;
      for (let j = 0; j < config.attackDiceNumber; j++) {
        currentRollResult =
          Math.floor(Math.random() * config.attackDiceType) + 1;
        if (currentRollResult >= config.defenseArmor) {
          successesInOneAttack++;
        }
      }
      totalSuccesses += successesInOneAttack;
      avgWoundsTotal.push(successesInOneAttack);
    }

    avgWounds = totalSuccesses / NUMBER_OF_ROLLS;
    const onlySingleValues: number[] = [...new Set(avgWoundsTotal)].sort();
    onlySingleValues.forEach((singleValue) =>
      singleValuesPerc.push({
        number: singleValue,
        percentage:
          (avgWoundsTotal.filter((wound) => wound === singleValue).length /
            NUMBER_OF_ROLLS) *
          100,
      })
    );

    this.setResult({
      testId: config.testId,
      averageWounds: avgWounds,
      chartData: singleValuesPerc,
    });
  }
}
