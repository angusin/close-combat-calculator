export interface SingleTestConfig {
  testId: number;
  attackDiceType: number;
  attackDiceNumber: number;
  defenseArmor: number;
  aiming: boolean;
  inCover: boolean;
}
export interface RollResult {
  testId: number;
  averageWounds: number;
  chartData: SingleValue[];
}

export interface SingleValue {
  number: number;
  percentage: number;
}
