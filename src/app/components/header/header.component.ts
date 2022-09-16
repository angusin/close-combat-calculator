import { Component, OnInit } from "@angular/core";

@Component({
  template: `<nav class="navbar">
    <a href="#" class="navbar-brand">
      <img src="assets/icon.png" alt="..." />
      Close Combat Calculator
    </a>
    <form
      class="form-inline d-none d-md-flex ml-auto"
      action="..."
      method="..."
    >
      <span class="navbar-text text-monospace mr-15">v1.0</span>
      <a
        href="https://github.com/angusin/close-combat-calculators"
        target="_blank"
        class="btn btn-rounded btn-primary"
        role="button"
        >View in GitHub</a
      >
    </form>
  </nav>`,
  selector: "app-header",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
