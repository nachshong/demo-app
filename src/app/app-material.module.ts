import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
