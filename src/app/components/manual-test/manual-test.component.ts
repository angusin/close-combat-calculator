import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { Subject, takeUntil, tap } from "rxjs";
import { DataStoreService } from "src/app/services/data.store.service";
import { SingleTestConfig } from "src/app/types/types";
import { Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  template: `<div class="card" [ngStyle]="{ 'border-top-color': color }">
    <form [formGroup]="fixedTestForm">
      <div class="container-fluid">
        <div class="row">
          <!-- Attack Dice Type -->
          <div class="col-sm mr-15">
            <label for="{{ config.testId }}-attack-dice-type"
              >Attack Dice Type:</label
            >
            <select
              class="form-control form-control-lg"
              id="{{ config.testId }}-attack-dice-type"
              formControlName="attackDiceType"
            >
              <option value="" selected="selected" disabled="disabled">
                Dice type
              </option>
              <option value="4">D4</option>
              <option value="6">D6</option>
              <option value="8">D8</option>
              <option value="10">D10</option>
              <option value="12">D12</option>
            </select>
          </div>
          <div class="col-sm">
            <!-- Attack Dice Number -->
            <label for="{{ config.testId }}-attack-dice-number"
              >Attack Dice Number:</label
            >
            <input
              class="form-control form-control-lg"
              id="{{ config.testId }}-attack-dice-number"
              type="number"
              formControlName="attackDiceNumber"
              placeholder="Number of dice to roll in the attack"
            />
          </div>
        </div>
      </div>

      <!-- Defence Armor -->
      <label for="{{ config.testId }}-armor" class="mt-15"
        >Defence Armor:</label
      >
      <input
        class="form-control form-control-lg"
        id="{{ config.testId }}-armor"
        type="number"
        formControlName="defenseArmor"
        placeholder="Number of defence/armor of the objective"
      />

      <p>Options:</p>

      <!-- Aiming Check -->
      <div class="custom-checkbox mb-10">
        <input
          type="checkbox"
          id="{{ config.testId }}-aiming"
          formControlName="aiming"
        />
        <label for="{{ config.testId }}-aiming">Aiming</label>
      </div>

      <!-- In Cover Check -->
      <div class="custom-checkbox">
        <input
          type="checkbox"
          id="{{ config.testId }}-cover"
          formControlName="inCover"
        />
        <label for="{{ config.testId }}-cover">Objective in Cover</label>
      </div>
    </form>
  </div>`,
  selector: "app-manual-test",
  styleUrls: ["./manual-test.component.scss"],
})
export class ManualTestComponent implements OnInit, OnDestroy {
  @Input() config: SingleTestConfig = {
    testId: 1,
    attackDiceType: 10,
    attackDiceNumber: 2,
    defenseArmor: 6,
    aiming: true,
    inCover: true,
  };
  @Input() color: string;

  fixedTestForm!: UntypedFormGroup;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: UntypedFormBuilder,
    private dataStoreService: DataStoreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fixedTestForm = this.fb.group({
      attackDiceType: [this.config.attackDiceType],
      attackDiceNumber: [this.config.attackDiceNumber, Validators.max(6)],
      defenseArmor: [this.config.defenseArmor],
      aiming: [this.config.aiming],
      inCover: [this.config.inCover],
    });
    this.dataStoreService.calculateSuccessPercentage(this.config);
    this.getFormChanges().pipe(takeUntil(this.destroy$)).subscribe();
  }

  private getFormChanges() {
    return this.fixedTestForm.valueChanges.pipe(
      tap((value) => {
        if (this.fixedTestForm.status === "INVALID") {
          this.toastr.warning("Maximum dice number is 6", "Dice Number Error");
          return;
        }
        this.dataStoreService.setConfig({
          ...value,
          testId: this.config.testId,
        });
        setTimeout(() => {
          this.dataStoreService.calculateSuccessPercentage(this.config);
        }, 100);
      })
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
