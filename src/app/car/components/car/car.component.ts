import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) {}
  carsWithOwners: any[] = [];

  ngOnInit(): void {
    this.carsWithOwners = this.carService.getCarsWithOwners();
  }
}
