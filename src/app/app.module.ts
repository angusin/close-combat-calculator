import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GraphComponent } from "./components/graph/graph.component";
import { HeaderComponent } from "./components/header/header.component";
import { ManualTestComponent } from "./components/manual-test/manual-test.component";
import { DataStoreService } from "./services/data.store.service";
import { NgChartsModule } from "ng2-charts";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HeaderComponent,
    ManualTestComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: "toast-bottom-center",
    }),
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
