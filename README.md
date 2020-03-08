# AngularLayout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To generate router

ng generate module app-routing --flat --module=app

## Development guide

### Install flex-layout

    - npm i -s @angular/flex-layout @angular/cdk

### Create default layout & module

    - ng g c layout/default
    - ng g m layout/default

### Create modules component

    - ng g c modules/home
    - ng g c modules/posts
    - ng g c modules/login

### Create Shared modules

    - ng g c shared/component/sidebar
    - ng g c shared/component/header
    - ng g c shared/component/footer
    - ng g m shared/

### Create default fullwidth component & module

    - ng g c layout/fullwidth
    - ng g m layout/fullwidth

# Reference

    - https://github.com/angular/flex-layout
