import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../modules/home/home.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
