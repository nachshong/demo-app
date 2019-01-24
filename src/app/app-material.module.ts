import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class AppMaterialModule { }
