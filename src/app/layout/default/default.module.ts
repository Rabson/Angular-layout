import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DefaultComponent } from "./default.component";
import { HomeComponent } from "src/app/modules/home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { PostsComponent } from "src/app/modules/posts/posts.component";

@NgModule({
  declarations: [DefaultComponent, HomeComponent, PostsComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, SharedModule]
})
export class DefaultModule {}
