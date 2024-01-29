import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: any;
  charts: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }

  onAddToChart(product: any) {
    this.charts.push(product);
    console.log(product);
  }
}
