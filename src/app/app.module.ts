import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GraphComponent } from "./components/graph/graph.component";
import { HeaderComponent } from "./components/header/header.component";
import { ManualTestComponent } from "./components/manual-test/manual-test.component";
import { DataStoreService } from "./services/data.store.service";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HeaderComponent,
    ManualTestComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgChartsModule],
  providers: [DataStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
