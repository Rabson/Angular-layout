import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DefaultModule } from "./layout/default/default.module";
import { FullwidthModule } from "./layout/fullwidth/fullwidth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
