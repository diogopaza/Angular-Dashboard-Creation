import { Injectable } from '@angular/core';
import { faDashboard, faLocation, faShop, faBox, faChartBar, faBoxes, 
          faContactBook,  faHand, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {  
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faBoxes = faBoxes;

  constructor() { }
}
