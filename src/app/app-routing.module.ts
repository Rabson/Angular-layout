import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, ChildrenOutletContexts } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { DefaultComponent } from "./layout/default/default.component";
import { HomeComponent } from "./modules/home/home.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { FullwidthComponent } from "./layout/fullwidth/fullwidth.component";
import { LoginComponent } from "./modules/login/login.component";

import { DefaultModule } from "./layout/default/default.module";
import { FullwidthModule } from "./layout/fullwidth/fullwidth.module";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "posts", component: PostsComponent }
    ]
  },
  {
    path: "",
    component: FullwidthComponent,
    children: [{ path: "login", component: LoginComponent }]
  }
];

const modules = [BrowserModule, DefaultModule, FullwidthModule];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, modules]
})
export class AppRoutingModule {}
