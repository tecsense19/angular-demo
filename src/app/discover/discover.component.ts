import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { NgClass, NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { NgModel, NgModelGroup } from '@angular/forms';

export interface Element {
  name: string;
  "change today": number;
  price: Number;
  short: string;
  icon: string;
  change: Number;
  percentage: Number
}

const ELEMENT_DATA: Element[] = [
  { name: 'Vanguard S&P 500 Etf', 'change today': 1.0079, price: 462.61, short: "VOO", icon: "img_1.svg", change: 2.62, percentage: (0.57) },
  { name: 'Telo Genomics Corp', 'change today': 4.0026, price: 4.23, short: "TELO", icon: "img_2.svg", change: (4.23), percentage: (0.00) },
  { name: 'Asmi Holding Nv', 'change today': 6.941, price: 840.00, short: "ASML", icon: "img_3.svg", change: (-12.40), percentage: (-1.45) },
  { name: 'Apple Inc', 'change today': 9.0122, price: 840.00, short: "AAPL", icon: "img_4.svg", change: 0.22, percentage: (0.13) },
  { name: 'Nvidia Corporation', 'change today': 10.811, price: 854.01, short: "NVDA", icon: "img_5.svg", change: 13.66, percentage: (1.63) },
  { name: 'Tesla Motors Inc.', 'change today': 12.0107, price: 151.02, short: "TSLA", icon: "img_6.svg", change: -4.43, percentage: (-2.85) },
  { name: 'Taiwan Semiconductor Manufacturing', 'change today': 14.0067, price: 133.85, short: "TSM", icon: "img_7.svg", change: -5.18, percentage: (-3.73) },
  { name: 'Direxion Daily China Bull', 'change today': 15.9994, price: 18.90, short: "TSM", icon: "img_8.svg", change: 1.00, percentage: (5.59) },
  { name: 'Ethereum Tracker', 'change today': 18.9984, price: 267.81, short: "XBTE", icon: "img_9.svg", change: 9.26, percentage: (3.58) },
  { name: 'Blackrock Capital Allocation Trust', 'change today': 20.1797, price: 76.10, short: "BCAT", icon: "img_10.svg", change: 0.29, percentage: (0.38) },
];


@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [RouterLink, MatTableModule, NgStyle, NgClass,],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  getCurrentPathName() {
    return this.router.url.split('/')[1];
  }

  displayedColumns: string[] = ['name', 'change today', 'price', ' '];
  searchText: string = '';
  filteredDataSource: any[] = [];
  dataSource = ELEMENT_DATA;

  getColor(change: number): string {
    if (change < 0) {
      return '#FF6262';
    } else if (change > 0) {
      return '#4DC970';
    } else {
      return '#6B7280';
    }
  }

  ngOnInit() {
    this.filteredDataSource = this.dataSource;
  }

  applyFilter() {
    this.filteredDataSource = this.dataSource.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openDialog(element: any) {
    this.dialog.open(DailogComponent, {
      data: { elementData: element },
    });
  }

}
