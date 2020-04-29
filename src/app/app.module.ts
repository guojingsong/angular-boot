import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {  MatButtonModule } from '@angular/material/button';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatCardModule } from '@angular/material/card';
import {  MatCheckboxModule } from '@angular/material/checkbox'; 
import {  MatIconModule } from '@angular/material/icon';
import {  MatMenuModule } from '@angular/material/menu'; 
import {  MatSelectModule } from '@angular/material/select';
            

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { MaterialDesignFrameworkModule } from '../../projects/json-schema-form/src/lib/framework-library/material-design-framework/material-design-framework.module';
import { Bootstrap4FrameworkModule } from '../../projects/json-schema-form/src/lib/framework-library/bootstrap-4-framework/bootstrap-4-framework.module';
import { Bootstrap3FrameworkModule } from '../../projects/json-schema-form/src/lib/framework-library/bootstrap-3-framework/bootstrap-3-framework.module';
import { NoFrameworkModule } from '../../projects/json-schema-form/src/lib/framework-library/no-framework/no-framework.module';
import { AceEditorDirective } from './ace-editor.directive';

@NgModule({
  declarations: [AppComponent, AceEditorDirective,AppComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule,
    HttpClientModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule,
    RouterModule.forRoot(routes),
    MaterialDesignFrameworkModule,
    Bootstrap4FrameworkModule,
    Bootstrap3FrameworkModule,
    NoFrameworkModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
