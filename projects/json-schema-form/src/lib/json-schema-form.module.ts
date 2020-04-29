import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonSchemaFormComponent } from './json-schema-form.component';
import { NoFrameworkModule } from './framework-library/no-framework/no-framework.module';
import { WidgetLibraryModule } from './widget-library/widget-library.module';

@NgModule({
  declarations: [JsonSchemaFormComponent],
  imports: [FormsModule, ReactiveFormsModule,NoFrameworkModule,WidgetLibraryModule,],
  exports: [JsonSchemaFormComponent]
})
export class JsonSchemaFormModule { }
