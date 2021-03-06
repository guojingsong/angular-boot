import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core';
import { JSONEditor }  from '../lib/json-editor';
@Component({
  selector: 'json-edit',
  template: `
      <div id='editor_holder'></div>
      <button id='submit'>Submit (console.log)</button>      
  `,
  styles: [
  ]
})
export class JsonEditComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    var editor = new JSONEditor(document.getElementById('editor_holder'),{
      schema: {
        type: "object",
        title: "Car",
        properties: {
          make: {
            type: "string",
            enum: [
              "Toyota",
              "BMW",
              "Honda",
              "Ford",
              "Chevy",
              "VW"
            ]
          },
          model: {
            type: "string"
          },
          year: {
            type: "integer",
            enum: [
              1995,1996,1997,1998,1999,
              2000,2001,2002,2003,2004,
              2005,2006,2007,2008,2009,
              2010,2011,2012,2013,2014
            ],
            default: 2008
          },
          safety: {
            type: "integer",
            format: "rating",
            maximum: "5",
            exclusiveMaximum: false,
            readonly: false
          }
        }
      }
    });    
    document.getElementById('submit').addEventListener('click',function() {
      // Get the value from the editor
      console.log(editor.getValue());
    });    
  }

}
