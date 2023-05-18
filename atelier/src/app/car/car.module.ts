import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CarModule {
  // les attributs

  public id_car!: number;
  public model!: string;
  public hp!: number;
  public marque!: string;
}
