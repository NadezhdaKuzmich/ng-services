import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CarService } from './car.service';

@NgModule({
  declarations: [CarComponent],
  imports: [CommonModule],
  exports: [CarComponent],
  providers: [CarService],
})
export class CarModule {}
