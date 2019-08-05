import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatButtonToggleModule,MatRippleModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatButtonToggleModule,MatRippleModule], // 先import
  exports: [MatButtonModule,MatButtonToggleModule,MatRippleModule] // 在export
})
export class SharedMaterialModule {}
