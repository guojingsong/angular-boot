import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent }
];
